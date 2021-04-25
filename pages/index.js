import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="April 25"
      title="Luke 4:31-37 Authority and Power through Faith"
      embedId="0Pajhi2jTx4"
      sermonPdf="/spiritword_sermon_4-25-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
