import Layout from "../components/Layout";
import Link from "next/link";
import AdminHeader from "../components/AdminHeader";
import getUserByCookie from "../lib/getUserByCookie";
import SermonEditor from "../components/SermonEditor";
import { useRouter } from "next/router";
import { useAddSermon } from "../lib/api";
import {
  dateStringToPdfName,
  FormSermon,
  SupaSermon,
  youtubeIdfromUrl,
} from "../lib/sermon";

export async function getServerSideProps({ req }) {
  return getUserByCookie(req);
}

function New({ user }) {
  const { addSermon, sermonError } = useAddSermon();

  const router = useRouter();

  const onSubmit = (data: FormSermon) => {
    const { title, html_date, pdf, youtube } = data;
    // Get the embed id from the pasted youtube url
    let embedId = youtube ? youtubeIdfromUrl(youtube) : undefined;
    let file = pdf ? pdf[0] : undefined;
    // Generate a new PDF filename based on the date
    let file_name = dateStringToPdfName(html_date);
    let sermon: SupaSermon = {
      date: html_date,
      title: title,
      youtube_id: embedId,
      pdf: file_name,
    };
    addSermon(sermon, file).then(() => router.push("/admin"));
  };

  return (
    <Layout>
      <AdminHeader user={user} />
      <div className="row">
        <h1>New</h1>
        <Link href="/admin" passHref>
          <button>Cancel</button>
        </Link>
      </div>
      <SermonEditor
        sermonToEdit={undefined}
        onSave={onSubmit}
        submitError={sermonError}
      />
      <style jsx>{`
        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: black;
          color: white;
          padding: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </Layout>
  );
}

export default New;
