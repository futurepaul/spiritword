import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="February 14"
      title="Luke 2, Jesus, About His Father's Business"
      embedId="0zg_17TplVY"
      sermonPdf="/spiritword_sermon_2-14-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
