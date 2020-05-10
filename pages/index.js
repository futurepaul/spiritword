import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="May 10th"
      title="1 Timothy 5, Honoring Women in the Church"
      embedId="3qwcjDpjcuE"
      sermonPdf="/spiritword_sermon_5-10-20.pdf"
      songsPdf="/spiritword_songs_5-10-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
