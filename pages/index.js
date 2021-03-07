import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="March 7"
      title="Luke 3, A Tale of Two Testaments (John the Baptist)"
      embedId="4h8WkiE7cn8"
      sermonPdf="/spiritword_sermon_3-7-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
