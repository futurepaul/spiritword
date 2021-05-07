import Layout from "../components/Layout";
import Link from "next/link";
import { supabase } from "../lib/initSupabase";
import { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSingleSermon from "../components/AdminSingleSermon";
import StyledRow from "../components/StyledRow";
import { UserContextProvider } from "../lib/UserContext";
import { useRouter } from "next/router";

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }

  return { props: { user } };
}

function Admin({ user }) {
  const [sermons, setSermons] = useState([]);

  const router = useRouter();

  const fetchSermons = async () => {
    let { data: sermons, error } = await supabase
      .from("sermons")
      .select("*")
      .order("id", { ascending: false });
    if (error) console.log("error", error);
    else setSermons(sermons);
  };

  useEffect(() => {
    fetchSermons();
  }, []);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        //if (event === 'PASSWORD_RECOVERY') setAuthView('update_password')
        if (event === "USER_UPDATED")
          setTimeout(() => router.push("/login"), 1000);
        // Send session to /api/auth route to set the auth cookie.
        // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <Layout>
      <UserContextProvider supabaseClient={supabase}>
        <AdminHeader user={user} />
        <StyledRow>
          <h1>Sermons</h1>
          <Link href="/new" passHref>
            <button>New</button>
          </Link>
        </StyledRow>
        {sermons.map((sermon) => {
          return <AdminSingleSermon {...sermon} />;
        })}
      </UserContextProvider>
    </Layout>
  );
}

export default Admin;
