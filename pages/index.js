import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="May 24th"
      title="1 Timothy 5, More Sound Teaching"
      embedId="qjBfPER0afM"
      sermonPdf="/spiritword_sermon_5-24-20.pdf"
      songsPdf="/spiritword_songs_5-24-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
