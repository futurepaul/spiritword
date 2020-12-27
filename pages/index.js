import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="December 27"
      title="Come Thou Long Expected Jesus"
      embedId="eBiFFqcgUQU"
      sermonPdf="/spiritword_sermon_12-27-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
