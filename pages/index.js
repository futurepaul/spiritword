import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="March 21"
      title="Luke 4, Christ's Ministry Begins in the Wilderness"
      embedId="AJMgmI6ndVM"
      sermonPdf="/spiritword_sermon_3-21-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
