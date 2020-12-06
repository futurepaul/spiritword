import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="December 6"
      title="Titus 1:10-16, False Teachers, part 3"
      embedId="RTQbD8PQC2I"
      sermonPdf="/spiritword_sermon_12-6-20.pdf"
      songsPdf="/spiritword_songs_12-6-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
