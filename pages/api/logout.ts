import { supabase } from "../../lib/initSupabase";

export default async function logoutUser(req, res) {
  let { error } = await supabase.auth.signOut();

  if (error) return res.status(401).json({ error: error.message });

  return res.status(200).json({ body: "User has been logged out" });
}
