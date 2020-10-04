import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="October 4"
      title="2 Timothy 4, Fulfill Your Ministry"
      embedId="HrpXEeruYow"
      sermonPdf="/spiritword_sermon_10-4-20.pdf"
      songsPdf="/spiritword_songs_10-4-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
