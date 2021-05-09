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
  toHtmlDate,
} from "../lib/sermon";

export async function getServerSideProps({ req }) {
  return getUserByCookie(req);
}

interface JsonSermon {
  title: string;
  date: string;
  sermonPdf: string;
  embedId: string;
}

function Batch({ user }) {
  const { addSermon, sermonError } = useAddSermon();

  const router = useRouter();

  const onSubmit = () => {
    const data = require("../sermons.json");
    for (const jsonSermon of data) {
      const { title, date, sermonPdf, embedId } = jsonSermon;
      let html_date = toHtmlDate(new Date(Date.parse(date)));
      let trimmed_pdf = sermonPdf?.replace(/^\/|\/$/g, "");

      let sermon: SupaSermon = {
        date: html_date,
        title: title,
        youtube_id: embedId,
        pdf: trimmed_pdf,
      };

      console.log(sermon);
      addSermon(sermon, undefined).then(() => console.log("Added", html_date));
    }
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
      <div>
        <button onClick={onSubmit}>Upload</button>
      </div>

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

export default Batch;
