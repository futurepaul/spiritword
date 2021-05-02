import Layout from "../components/Layout";

function SingleSermon() {
  return (
    <div className="single">
      <p>date="April 11"</p>
      <p>title="Luke 4:18-30 Not Even Welcome in His Hometown"</p>
      <p>embedId="dXvo4vFhcY8"</p>
      <p>sermonPdf="/spiritword_sermon_4-11-21.pdf"</p>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <style jsx>{`
        p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .single {
          background-color: white;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        .buttons {
          display: flex;
          justify-content: end;
          background-color: pink;
        }
      `}</style>
    </div>
  );
}

function Admin() {
  return (
    <Layout>
      <SingleSermon />
      <SingleSermon />
      <SingleSermon />
    </Layout>
  );
}

export default Admin;
