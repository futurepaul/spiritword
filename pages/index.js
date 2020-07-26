import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="July 26th"
      title="2 Timothy 1, God's Plan, From All Eternity, But Now"
      embedId="vNZd8q2GAj8"
      sermonPdf="/spiritword_sermon_7-26-20.pdf"
      songsPdf="/spiritword_songs_7-26-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
