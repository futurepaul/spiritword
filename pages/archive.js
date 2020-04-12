import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <SermonItem
      date="April 5th"
      title="1 Timothy 3:6-7, Instruction for Elders and Deacons"
      embedId="aelYPTVFig4"
      sermonPdf="/spiritword_sermon_4-5-20.pdf"
      songsPdf="/spiritword_songs_4-5-20.pdf"
    />
    <SermonItem
      date="March 29th"
      title="1 Timothy 3:1-7, Instruction for Elders"
      embedId="C1xbA4TqneU"
      sermonPdf="/spiritword_1_Tim_3-1-7.pdf"
      songsPdf="/spiritword_songs_3-29-20.pdf"
    />
  </Layout>
);

export default Home;
