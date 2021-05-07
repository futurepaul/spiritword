import { supabase } from "../../lib/initSupabase";

export default async function registerUser(req, res) {
  const { email, password } = req.body;

  console.log("signing up...");

  let { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) return res.status(401).json({ error: error.message });

  return res.status(200).json({ user: user });
}
