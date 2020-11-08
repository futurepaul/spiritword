import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="November 8"
      title="Titus 1:5-10, Appointing Qualified Elders"
      embedId="aBQdAs8RCfk"
      sermonPdf="/spiritword_sermon_11-8-20.pdf"
      songsPdf="/spiritword_songs_11-8-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
