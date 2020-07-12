import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="July 12th"
      title="2 Timothy 1, Join Me in Suffering for the Gospel"
      embedId="H3KxRiGUyWU"
      sermonPdf="/spiritword_sermon_7-12-20.pdf"
      songsPdf="/spiritword_songs_7-12-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
