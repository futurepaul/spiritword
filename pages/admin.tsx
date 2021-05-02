import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";

function SingleSermon() {
  const date = "April 11";
  const title = "Luke 4:18-30 Not Even Welcome in His Hometown";
  const youtubeId = "dXvo4vFhcY8";
  const sermonPdf = "spiritword_sermon_4-11-21.pdf";
  return (
    <div className="single">
      <h1>{date.toString()}</h1>
      <h2>{title}</h2>
      <a href={`https://youtu.be/${youtubeId}`}>
        <Image
          src={`https://i3.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
          width="240"
          height="180"
        />
      </a>
      <code>
        <p>date: "{date}"</p>
        <p>title: "{title}"</p>
        <p>youtubeId: "{youtubeId}"</p>
        <p>sermonPdf="{sermonPdf}"</p>
      </code>
      <div className="buttons">
        <button>Edit</button>
        <div className="spacer" />
        <button>Delete</button>
      </div>
      <style jsx>{`
        h1,
        h2 {
          margin-bottom: 0.5rem;
        }
        p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .single {
          background-color: white;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        .buttons {
          display: flex;
          justify-content: end;
        }
        .spacer {
          width: 1rem;
        }
      }
      `}</style>
    </div>
  );
}

function Admin() {
  const { user } = Auth.useUser();
  return (
    <Layout>
      {!user ? (
        <Auth
          supabaseClient={supabase}
          providers={["google", "github"]}
          socialLayout="horizontal"
          socialButtonSize="xlarge"
        />
      ) : (
        <>
          <div className="row">
            <h1>Sermons</h1>
            <Link href="/new" passHref>
              <button>New</button>
            </Link>
          </div>
          <SingleSermon />
          <SingleSermon />
          <SingleSermon />
        </>
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

export default Admin;
