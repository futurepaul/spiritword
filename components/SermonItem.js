import Embed from "../components/Embed";
import DownloadButton from "../components/DownloadButton";

const SermonItem = ({ date, title, embedId, sermonPdf, songsPdf }) => (
  <div className="sermon-item">
    <h2>{date}</h2>
    <h3>{title}</h3>
    <p>
      <Embed id={embedId} />
    </p>
    <DownloadButton url={sermonPdf}>Sermon.pdf</DownloadButton>
    <DownloadButton url={songsPdf}>Songs.pdf</DownloadButton>
  </div>
);

export default SermonItem;
