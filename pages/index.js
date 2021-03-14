import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="March 14"
      title="Luke 3, A Tale of Two Testaments (Jesus of Nazareth)"
      embedId="_rG2kfD5_I4"
      sermonPdf="/spiritword_sermon_3-14-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
