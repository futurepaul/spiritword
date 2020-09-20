import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="September 20th"
      title="2 Timothy 3, The Value of the Scriptures"
      embedId="P0O61v7NDf0"
      sermonPdf="/spiritword_sermon_9-20-20.pdf"
      songsPdf="/spiritword_songs_9-20-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
