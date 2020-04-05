import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";

const Home = () => (
  <Layout>
    <div className="sermon-item">
      <h2>March 29th</h2>
      <h3>1 Timothy 3:1-7, Instruction for Elders</h3>
      <p>
        <Embed id={"C1xbA4TqneU"}></Embed>
      </p>
      <DownloadButton url="/spiritword_1_Tim_3-1-7.pdf">
        Sermon.pdf
      </DownloadButton>
      <DownloadButton url="/spiritword_songs_3-29-20.pdf">
        Songs.pdf
      </DownloadButton>
    </div>
  </Layout>
);

export default Home;
