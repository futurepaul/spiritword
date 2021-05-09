import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "../lib/initSupabase";
import StyledRow from "./StyledRow";

export default function AdminHeader({ user }) {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("user updated...");
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((_res) => router.push(`/login`));
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const signOutUser = async () => {
    console.log("signing out...");

    let { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    }
  };

  return (
    <StyledRow>
      <h2>Signed in as {user.email}</h2>
      <button onClick={signOutUser}>Sign out</button>
    </StyledRow>
  );
}
