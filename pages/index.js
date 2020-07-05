import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="July 5th"
      title="2 Timothy 1, Stand Firm, Christ Died to Make Men Holy"
      embedId="atbsOf8oL_A"
      sermonPdf="/spiritword_sermon_7-5-20.pdf"
      songsPdf="/spiritword_songs_7-5-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
