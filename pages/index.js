import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";
import LinkButton from "../components/LinkButton";
import { supabase } from "../lib/initSupabase";

export async function getStaticProps() {
  const { data: sermon, error } = await supabase
    .from("sermons")
    .select("*")
    .order("date", { ascending: false })
    .limit(1)
    .single();

  console.log(sermon);

  return {
    props: {
      sermon,
    },
    revalidate: 1, // In seconds
  };
}

const Home = ({ sermon }) => (
  <Layout>
    <SermonItem
      key={sermon.id}
      date={sermon.date}
      title={sermon.title}
      embedId={sermon.youtube_id}
      sermonPdf={sermon.pdf}
    />
    <LinkButton href="/archive" title="View Past Sermons" />
  </Layout>
);

export default Home;
