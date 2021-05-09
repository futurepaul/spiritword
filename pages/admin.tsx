import Layout from "../components/Layout";
import Link from "next/link";
import AdminHeader from "../components/AdminHeader";
import StyledRow from "../components/StyledRow";
import AdminSermonList from "../components/AdminSermonList";
import getUserByCookie from "../lib/getUserByCookie";

export async function getServerSideProps({ req }) {
  return getUserByCookie(req);
}

function Admin({ user }) {
  return (
    <Layout>
      <AdminHeader user={user} />
      <StyledRow>
        <h1>Sermons</h1>
        <Link href="/new" passHref>
          <button>New</button>
        </Link>
      </StyledRow>
      <AdminSermonList />
    </Layout>
  );
}

export default Admin;
