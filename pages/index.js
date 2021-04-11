import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="April 11"
      title="Luke 4:18-30 Not Even Welcome in His Hometown"
      embedId="dXvo4vFhcY8"
      sermonPdf="/spiritword_sermon_4-11-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
