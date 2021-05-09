import Layout from "../components/Layout";
import Link from "next/link";
import AdminHeader from "../components/AdminHeader";
import getUserByCookie from "../lib/getUserByCookie";
import SermonEditor from "../components/SermonEditor";
import { useRouter } from "next/router";
import { useEditSermon } from "../lib/api";
import {
  dateStringToPdfName,
  FormSermon,
  SupaSermon,
  youtubeIdfromUrl,
} from "../lib/sermon";

function youtubeUrlFromId(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

function formSermonfromSupasermon(supa: SupaSermon): FormSermon {
  let formSermon: FormSermon = {
    title: supa.title,
    html_date: supa.date,
    youtube: youtubeUrlFromId(supa.youtube_id),
    filename: supa.pdf ? supa.pdf : undefined,
  };

  return formSermon;
}

export async function getServerSideProps({ req }) {
  return getUserByCookie(req);
}

function Edit({ user }) {
  const router = useRouter();
  const { id } = router.query;

  const { sermon: sermonToEdit, editSermon, sermonError } = useEditSermon(
    Number(id)
  );

  const onSubmit = (data: FormSermon) => {
    const { title, html_date, pdf, youtube } = data;
    // Get the embed id from the pasted youtube url
    let embedId = youtubeIdfromUrl(youtube);
    let file = pdf[0];
    //let fixedDate = new Date(html_date);

    // Generate a new PDF filename based on the date
    // But only if we have a new pdf we're uploading
    let file_name = file
      ? dateStringToPdfName(html_date)
      : sermonToEdit.file_name;

    let sermon: SupaSermon = {
      id: Number(id),
      date: html_date,
      title: title,
      youtube_id: embedId,
      pdf: file_name,
    };
    editSermon(sermon, file).then(() => router.push("/admin"));
  };

  return (
    <Layout>
      <AdminHeader user={user} />
      <div className="row">
        <h1>Edit sermon {`#${id}`}</h1>
        <Link href="/admin" passHref>
          <button>Cancel</button>
        </Link>
      </div>
      {sermonToEdit && (
        <SermonEditor
          sermonToEdit={formSermonfromSupasermon(sermonToEdit)}
          onSave={onSubmit}
          submitError={sermonError}
        />
      )}
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

export default Edit;
