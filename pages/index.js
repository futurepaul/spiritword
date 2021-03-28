import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="March 28"
      title="Luke 4:1-12 Jesus Tempted by the Devil"
      embedId="4nVd-MYhnjc"
      sermonPdf="/spiritword_sermon_3-28-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
