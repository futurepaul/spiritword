import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="January 24"
      title="Luke 1:1-17, John the Baptist"
      embedId="AUUnqyXSQlI"
      sermonPdf="/spiritword_sermon_1-24-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
