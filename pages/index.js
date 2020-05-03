import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="May 3rd"
      title="1 Timothy 4, A Recap of Paul’s Instruction to Timothy"
      embedId="l58WDIQJ1t8"
      sermonPdf="/spiritword_sermon_5-3-20.pdf"
      songsPdf="/spiritword_songs_5-3-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
