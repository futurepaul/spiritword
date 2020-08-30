import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="August 30th"
      title="2 Timothy 2, God's Workman Has a Firm Foundation"
      embedId="u39LpSAD0FQ"
      sermonPdf="/spiritword_sermon_8-30-20.pdf"
      songsPdf="/img006.jpeg"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
