import Layout from "../components/Layout";
import SermonItem from "../components/SermonItem";

const Home = () => (
  <Layout>
    <>
      <SermonItem
        date="April 25"
        title="Luke 4:31-37 Authority and Power through Faith"
        embedId="0Pajhi2jTx4"
        sermonPdf="/spiritword_sermon_4-25-21.pdf"
      />

      <a href="/archive">
        <div className="card">
          <div>View Past Sermons</div>
        </div>
      </a>
    </>

    <style jsx>{`
      .card {
        margin-top: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        background-color: black;
        height: 50px;
      }

      .card img {
        margin-right: 0.5em;
      }

      .card:hover,
      .card:focus,
      .card:active {
        border-color: black;
        text-decoration: underline;
      }

      .card h3 {
        font-size: 1.5rem;
      }

      .card p {
        font-size: 1.25rem;
        line-height: 1.5;
      }

      a {
        color: white;
      }
    `}</style>
  </Layout>
);

export default Home;
