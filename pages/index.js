import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="September 13th"
      title="2 Timothy 3, Difficult Times"
      embedId="Wf4dgvpEGx8"
      sermonPdf="/spiritword_sermon_9-13-20.pdf"
      songsPdf="/spiritword_songs_9-13-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
