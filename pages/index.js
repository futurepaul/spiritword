import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <Embed id="aelYPTVFig4" />

    <p className="description">Download today's sermon notes and songs:</p>
    <div>
      <DownloadButton url="/spiritword_1_Tim_3-1-7.pdf">
        Sermon.pdf
      </DownloadButton>
      <DownloadButton url="/spiritword_songs_3-29-20.pdf">
        Songs.pdf
      </DownloadButton>
    </div>

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
