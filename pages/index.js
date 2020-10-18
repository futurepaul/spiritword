import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="October 18"
      title="2 Timothy 4, The Lion of Judah"
      embedId="nxkgfnBSYQM"
      sermonPdf="/spiritword_sermon_10-18-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
