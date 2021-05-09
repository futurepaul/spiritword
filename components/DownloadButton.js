import { useEffect, useState } from "react";
import { supabase } from "../lib/initSupabase";

const DownloadButton = ({ children, url }) => {
  const [downloadUrl, setDownloadUrl] = useState("");

  async function getSignedURL(path) {
    // This url should be good for a year
    const { signedURL, error } = await supabase.storage
      .from("sermon-pdfs")
      .createSignedUrl(path, 31557600);

    if (error) {
      console.error(error);
    }
    setDownloadUrl(signedURL);
  }

  useEffect(() => {
    getSignedURL(url);
  }, [url]);

  return (
    <>
      <a href={downloadUrl} download>
        <div className="card">
          <img src="/pdf_icon.svg" width="20"></img>
          <div>{children}</div>
        </div>
      </a>

      <style jsx>{`
        .card {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          background-color: lightgray;
          height: 50px;
        }

        .card img {
          margin-right: 0.5em;
        }

        .card:hover,
        .card:focus,
        .card:active {
          border-color: black;
          text-decoration: underline;
        }

        .card h3 {
          font-size: 1.5rem;
        }

        .card p {
          font-size: 1.25rem;
          line-height: 1.5;
        }

        a {
          color: black;
        }
      `}</style>
    </>
  );
};

export default DownloadButton;
