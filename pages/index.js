import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="June 28th"
      title="2 Timothy 1, Power, Love and a Sound Mind Part 2"
      embedId="_U8pN5NENf0"
      sermonPdf="/spiritword_sermon_6-28-20.pdf"
      songsPdf="/spiritword_songs_6-28-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
