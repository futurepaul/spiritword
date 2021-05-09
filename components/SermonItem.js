import Embed from "../components/Embed";
import DownloadButton from "../components/DownloadButton";
import { toPrettyDate } from "../lib/sermon";

const SermonItem = ({ date, title, embedId, sermonPdf }) => (
  <div className="sermon-item">
    <Embed id={embedId} />
    <div className="info">
      <h2>{toPrettyDate(date)}</h2>
      <div className="spacer" />
      <h3>{title}</h3>
      <div className="spacer" />
      {sermonPdf && <DownloadButton url={sermonPdf}>Sermon.pdf</DownloadButton>}
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
        background: white;
      }
    `}</style>
  </div>
);

export default SermonItem;
