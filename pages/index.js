import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="January 10"
      title="Titus 3, All Are Saved by Grace"
      embedId="PotfPqJDZCY"
      sermonPdf="/spiritword_sermon_1-10-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
