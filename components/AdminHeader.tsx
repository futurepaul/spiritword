import router from "next/router";
import StyledRow from "./StyledRow";

export default function AdminHeader({ user }) {
  const signOutUser = async () => {
    const res = await fetch(`/api/logout`);
    if (res.status === 200) {
      router.push("/admin");
    }
  };

  return (
    <StyledRow>
      <h2>Signed in as {user.email}</h2>
      <button onClick={signOutUser}>Sign out</button>
    </StyledRow>
  );
}
