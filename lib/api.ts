import { useEffect, useState } from "react";
import { supabase } from "./initSupabase";
import { SupaSermon } from "./sermon";

export function useEditSermon(id: number) {
  const [sermon, setSermon] = useState(undefined);
  const [sermonError, setError] = useState(undefined);

  const fetchSermon = async () => {
    let { data, error } = await supabase
      .from("sermons")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      console.error(error);
      setError(error);
    } else {
      setSermon(data);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSermon();
    }
  }, [id]);

  const editSermon = async (sermon: SupaSermon, file?: File) => {
    setError(undefined);
    console.log("submitting sermon: ", sermon);

    // First upload the pdf and make sure that succeeds
    // Only try to upload if we have a pdf selected
    if (sermon.pdf && file) {
      const {
        data: _storage_data,
        error: storage_error,
      } = await supabase.storage.from("sermon-pdfs").upload(sermon.pdf, file);

      if (storage_error) {
        console.error("storage error:", storage_error);
        setError("Unable to upload file.");
        return;
      }
    }

    // Now save the basic sermon data
    const { data: _sql_data, error: sql_error } = await supabase
      .from("sermons")
      .upsert(sermon);

    if (sql_error) {
      console.error("sql error:", sql_error);
      setError("Unable to save sermon");
      return;
    } else {
      console.log("success");
    }
  };

  return { sermon, editSermon, sermonError };
}

export function useAddSermon() {
  const [sermonError, setError] = useState(undefined);
  const addSermon = async (sermon: SupaSermon, file?: File) => {
    setError(undefined);
    console.log("submitting sermon: ", sermon);

    // First upload the pdf and make sure that succeeds
    // Only try to upload if we have a pdf selected
    if (sermon.pdf && file) {
      const {
        data: _storage_data,
        error: storage_error,
      } = await supabase.storage.from("sermon-pdfs").upload(sermon.pdf, file);

      if (storage_error) {
        console.error("storage error:", storage_error);
        setError("Unable to upload file.");
        return;
      }
    }

    // Now save the basic sermon data
    const { data: _sql_data, error: sql_error } = await supabase
      .from("sermons")
      .insert(sermon)
      .single();

    if (sql_error) {
      console.error("sql error:", sql_error);
      setError("Unable to save sermon");
      return;
    } else {
      console.log("success");
    }
  };

  return { addSermon, sermonError };
}

export function useSermons() {
  const [sermons, setSermons] = useState([]);
  const [sermonError, setError] = useState(undefined);

  const fetchSermons = async () => {
    setError(undefined);
    let { data: sermons, error } = await supabase
      .from("sermons")
      .select("*")
      .order("date", { ascending: false });
    if (error) {
      console.log("error", error);
      setError(error);
    } else setSermons(sermons);
  };

  const deleteSermon = async (id: number) => {
    setError(undefined);
    console.log("deleting:", id);
    let { data: sermon, error } = await supabase
      .from("sermons")
      .delete()
      .eq("id", id);

    console.log("deleted", sermon);

    if (error) {
      console.error(error);
      setError(error);
    } else setSermons(sermons.filter((s) => s.id != id));
  };

  useEffect(() => {
    fetchSermons();
  }, []);

  return { sermons, deleteSermon, sermonError };
}
