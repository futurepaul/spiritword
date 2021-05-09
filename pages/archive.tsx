import { useRouter } from "next/router";
import Layout from "../components/Layout";
import LinkButton from "../components/LinkButton";
import SermonItem from "../components/SermonItem";
import { supabase } from "../lib/initSupabase";
import { SupaSermon } from "../lib/sermon";

export async function getStaticProps() {
  const { data: sermons, error } = await supabase
    .from("sermons")
    .select("*")
    .order("date", { ascending: false });

  return {
    props: {
      // skip the first one
      sermons: sermons.slice(1),
    },
    revalidate: 1, // In seconds
  };
}

function Archive({ sermons }) {
  const router = useRouter();
  const pageNumber = router.query.page ? Number(router.query.page) : 0;
  const howMany = 10;
  const rangeStart = pageNumber * howMany;
  const rangeEnd = (pageNumber + 1) * howMany;

  const sermonSlice: Array<SupaSermon> = sermons.slice(rangeStart, rangeEnd);

  const peekNext = sermons[rangeEnd + 1];

  const shouldHaveNextButton = sermonSlice.length == 10 && peekNext;
  const shouldHavePrevButton = pageNumber > 0;

  return (
    <Layout>
      {sermonSlice.map((sermon: SupaSermon) => {
        return (
          <SermonItem
            key={sermon.id}
            date={sermon.date}
            title={sermon.title}
            embedId={sermon.youtube_id}
            sermonPdf={sermon.pdf}
          />
        );
      })}
      <div className="row">
        {shouldHavePrevButton && (
          <LinkButton
            href={`/archive?page=${pageNumber - 1}`}
            title="Previous Page"
          />
        )}
        {shouldHaveNextButton && (
          <LinkButton
            href={`/archive?page=${pageNumber + 1}`}
            title="Next Page"
          />
        )}
      </div>
    </Layout>
  );
}

export default Archive;
