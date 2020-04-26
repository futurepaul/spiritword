import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="April 26th"
      title="1 Timothy 4, Controlling Our Behavior"
      embedId="UmFvwwABc18"
      sermonPdf="/spiritword_sermon_4-26-20.pdf"
      songsPdf=""
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
