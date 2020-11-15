import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="November 15"
      title="Titus 1:5-11, Appointing Qualified Elders"
      embedId="CPnPVNYrx8o"
      sermonPdf="/spiritword_sermon_11-15-20.pdf"
      songsPdf="/spiritword_songs_11-15-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
