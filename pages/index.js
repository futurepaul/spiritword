import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="November 1"
      title="Titus 1:1-4, Hope of Eternal Life"
      embedId="fOzhSf7AImI"
      sermonPdf="/spiritword_sermon_11-1-20.pdf"
      songsPdf="/spiritword_songs_11-1-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
