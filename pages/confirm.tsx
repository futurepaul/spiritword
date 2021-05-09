import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function Confirm() {
  const { query } = useRouter();

  return (
    <Layout>
      <div className="wrapper">
        <h1>You're signed up!</h1>

        <div className="spacer" />
        <p>
          Please check your {`${query.email}`} email for a confirmation link.
        </p>
      </div>

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        .spacer {
          height: 1rem;
        }
        .wrapper {
          background-color: white;
          padding: 1rem;
          margin-top: 1rem;
        }
        .footer {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}
