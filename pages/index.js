import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="April 12th"
      title="1 Timothy 3, The Mystery of Godliness, He is alive"
      embedId="rve5UVcdniY"
      sermonPdf="/spiritword_sermon_4-12-20.pdf"
      songsPdf="/spiritword_songs_4-12-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
