import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";
import Embed from "../components/Embed";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="June 7th"
      title="1 Timothy from the road!"
      embedId="EMXo6ugAbxQ"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
