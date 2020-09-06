import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="September 6th"
      title="2 Timothy 2, The Teacher / Believer's Character"
      embedId="8FYo2QzdFoI"
      sermonPdf="/spiritword_sermon_9-6-20.pdf"
      songsPdf="/spiritword_songs_9-6-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
