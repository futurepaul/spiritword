import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="August 2nd"
      title="2 Timothy 1, Let God Guard Our Riches"
      embedId="-c_d-eL42RA"
      sermonPdf="/spiritword_sermon_8-2-20.pdf"
      songsPdf="/spiritword_songs_8-2-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
