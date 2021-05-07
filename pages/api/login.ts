import { supabase } from "../../lib/initSupabase";

export default async function loginUser(req, res) {
  const { email, password } = req.body;

  let { user, error, session } = await supabase.auth.signIn({
    email: email,
    password: password,
  });

  if (error) return res.status(401).json({ error: error.message });

  return res.status(200).json({ user: user });
}
