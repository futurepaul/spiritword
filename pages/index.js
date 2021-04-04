import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="April 4"
      title="Luke 4:16-22 The Day of the Lord's Favor"
      embedId="qHP550QgyHw"
      sermonPdf="/spiritword_sermon_4-4-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
