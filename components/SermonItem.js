import Embed from "../components/Embed";
import DownloadButton from "../components/DownloadButton";

const SermonItem = ({ date, title, embedId, sermonPdf, songsPdf }) => (
  <div className="sermon-item">
    <Embed id={embedId} />
    <div className="info">
      <h2>{date}</h2>
      <div className="spacer" />
      <h3>{title}</h3>
      <div className="spacer" />
      {sermonPdf && <DownloadButton url={sermonPdf}>Sermon.pdf</DownloadButton>}
      {songsPdf && <DownloadButton url={songsPdf}>Songs.pdf</DownloadButton>}
    </div>
    <style jsx>{`
      .spacer {
        height: 0.5rem;
      }
      .info {
        padding: 1rem;
      }
      .sermon-item {
        margin-top: 1rem;
        width: 375px;

        background: white;
      }

      @media screen and (min-width: 600px) {
        .sermon-item {
          width: 560px;
        }
      }
    `}</style>
  </div>
);

export default SermonItem;
