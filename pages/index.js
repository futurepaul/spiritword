import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="August 16th"
      title="2 Timothy 2, The Grace to Be a Soldier pt. 2"
      embedId="bx4a9ygIW4g"
      sermonPdf="/spiritword_sermon_8-16-20.pdf"
      songsPdf="/spiritword_songs_8-16-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
