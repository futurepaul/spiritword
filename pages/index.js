import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <p className="description">Virtual church starts here at 10:30AM PDT!</p>

    <SermonItem
      date="October 11"
      title="2 Timothy 4, Timothy's Race and Paul's Finish"
      embedId="T2ERD0DrkKQ"
      sermonPdf="/spiritword_sermon_10-11-20.pdf"
    />

    <p>
      <a href="/archive">View past sermons</a>
    </p>
  </Layout>
);

export default Home;
