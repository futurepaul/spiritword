import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>
    <SermonItem
      date="February 21"
      title="Luke 3, John, Preparing the Way for the Lord"
      embedId="JZaXcCFe5Po"
      sermonPdf="/spiritword_sermon_2-21-21.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
