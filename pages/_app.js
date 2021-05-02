import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";
import "@fontsource/orelega-one";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </Auth.UserContextProvider>
  );
}
