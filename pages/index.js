import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="May 17th"
      title="1 Timothy 5, Qualifications for Widows and Elder"
      embedId="LvwLHGOMoVQ"
      sermonPdf="/spiritword_sermon_5-17-20.pdf"
      songsPdf="/spiritword_songs_5-17-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
