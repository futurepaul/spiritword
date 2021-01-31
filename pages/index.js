import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="January 31"
      title="Luke 1, God's Plan in Miraculous Births"
      embedId="Yn0aElHNWdM"
      sermonPdf="/spiritword_sermon_1-31-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
