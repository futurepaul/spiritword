import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <SermonItem
      date="May 3rd"
      title="1 Timothy 4, A Recap of Paul’s Instruction to Timothy"
      embedId="l58WDIQJ1t8"
      sermonPdf="/spiritword_sermon_5-3-20.pdf"
      songsPdf="/spiritword_songs_5-3-20.pdf"
    />
    <SermonItem
      date="April 26th"
      title="1 Timothy 4, Controlling Our Behavior"
      embedId="UmFvwwABc18"
      sermonPdf="/spiritword_sermon_4-26-20.pdf"
      songsPdf=""
    />
    <SermonItem
      date="April 19th"
      title="1 Timothy 4, Controlling Our Behavior"
      embedId="RSS59-zQI0g"
      sermonPdf="/spiritword_sermon_4-19-20.pdf"
      songsPdf="/spiritword_songs_4-19-20.pdf"
    />
    <SermonItem
      date="April 12th"
      title="1 Timothy 3, The Mystery of Godliness, He is alive"
      embedId="rve5UVcdniY"
      sermonPdf="/spiritword_sermon_4-12-20.pdf"
      songsPdf="/spiritword_songs_4-12-20.pdf"
    />
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
