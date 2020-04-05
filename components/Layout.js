import Head from "next/head";

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>SpiritWord Chapel</title>
      <link rel="icon" href="/favicon.ico?v=2" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      {" "}
      <a href="/">
        <div className="logo">
          <img
            src="/spiritword_spaced.svg"
            width="100%"
            alt="SpiritWord Chapel"
          ></img>
        </div>
      </a>
      {props.children}
    </main>

    <style jsx>{``}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
      }

      main {
        padding: 3rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .description {
        line-height: 1.5;
      }

      p a {
        color: #0070f3;
      }

      .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .logo img {
        width: 200px;
      }

      @media screen and (min-width: 600px) {
        .description {
          font-size: 1.5rem;
        }

        .logo img {
          width: 300px;
        }
      }
    `}</style>
  </div>
);

export default Layout;
