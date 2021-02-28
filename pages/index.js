import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="February 28"
      title="Luke 3, A Tale of Two Testaments"
      embedId="I3KRZ-SpdIU"
      sermonPdf="/spiritword_sermon_2-28-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
