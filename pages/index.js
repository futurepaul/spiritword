import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="August 9th"
      title="2 Timothy 2, The Grace to Be a Soldier"
      embedId="u5vh6js34fI"
      sermonPdf="/spiritword_sermon_8-9-20.pdf"
      songsPdf="/spiritword_songs_8-9-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
