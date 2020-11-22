import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="November 22"
      title="Titus 1:10-16, False Teachers"
      embedId="iI9r5jMcWws"
      sermonPdf="/spiritword_sermon_11-22-20.pdf"
      songsPdf="/spiritword_songs_11-22-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
