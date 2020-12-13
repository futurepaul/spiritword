import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="December 13"
      title="Hark the Herald Angels Sing"
      embedId="T5gD8vcJUcc"
      sermonPdf="/spiritword_sermon_12-13-20.pdf"
      songsPdf="/spiritword_songs_12-13-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
