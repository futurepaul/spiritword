import Head from "next/head";

const DownloadButton = ({ children, url }) => (
  <>
    <a href={url} download>
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
        margin: 0.5rem;
        padding: 0.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        height: 50px;
      }

      .card img {
        margin-right: 0.5em;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      a {
        color: black;
      }
    `}</style>
  </>
);

export default DownloadButton;
