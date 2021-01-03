import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="January 3"
      title="Titus 2, Proclaiming Sound Doctrine"
      embedId="v8BGteogFJE"
      sermonPdf="/spiritword_sermon_1-3-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
