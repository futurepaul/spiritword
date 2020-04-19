import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="April 19th"
      title="1 Timothy 4, Controlling Our Behavior"
      embedId="RSS59-zQI0g"
      sermonPdf="/spiritword_sermon_4-19-20.pdf"
      songsPdf="/spiritword_songs_4-19-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
