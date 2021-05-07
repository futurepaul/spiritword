import Layout from "../components/Layout";
import Link from "next/link";
import { supabase } from "../lib/initSupabase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FormSermon,
  SupaSermon,
  youtubeIdfromUrl,
  toHtmlDate,
  dateStringToPdfName,
} from "../lib/sermon";

function SermonEditor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSermon>();

  const [error, setError] = useState("");

  const router = useRouter();

  const addSermon = async (sermon: SupaSermon, file?: File) => {
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
      router.push("/admin");
    }
  };

  const onSubmit = (data: FormSermon) => {
    const { title, date, pdf, youtube } = data;
    // Get the embed id from the pasted youtube url
    let embedId = youtubeIdfromUrl(youtube);
    let file = pdf[0];
    // Convert the Date into a "May 4, 2021" format
    let fixedDate = toHtmlDate(date);
    // Generate a new PDF filename based on the date
    let file_name = dateStringToPdfName(fixedDate);
    let sermon = {
      date: fixedDate,
      title: title,
      youtube_id: embedId,
      pdf: file_name,
    };
    addSermon(sermon, file);
  };

  const isYouTubeUrl = (value: string): boolean => {
    let id: string = youtubeIdfromUrl(value);
    console.log(id);
    if (id) {
      return id.length === 11;
    } else {
      return false;
    }
  };

  return (
    <div className="single">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title
          {errors.title && <span> * This field is required</span>}
        </label>
        <input {...register("title", { required: true })} />
        <label>
          Date
          {errors.date && <span> * This field is required</span>}
        </label>
        <input
          type="date"
          {...register("date", { required: true, valueAsDate: true })}
        />
        <label>
          YouTube URL
          {errors.youtube && <span> * Not a valid YouTube URL</span>}
        </label>
        <input
          {...register("youtube", { required: true, validate: isYouTubeUrl })}
        />
        <label>Sermon PDF</label>
        <input
          type="file"
          name="pdf"
          onChange={() => console.log("hello")}
          {...register("pdf", { required: false })}
        />
        <div className="buttons">
          <div />
          <input value="Save" type="submit" />
        </div>
        {error && <div className="error">{error}</div>}
      </form>
      <style jsx>{`
        .error {
          background-color: red;
          color: white;
          padding: 0.5rem;
          margin: 0.5rem;

        }
        span {
          font-size: 0.75rem;
          color: red;
        }

        form {
          display: flex;
          flex-direction: column;
        }
        label {
          display: flex;
          justify-content: space-between;
          font-size: 1.25rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .single {
          background-color: white;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        .buttons {
          display: flex;
          justify-content: end;
        }
        .spacer {
          width: 1rem;
        }
      }
      `}</style>
    </div>
  );
}

function New() {
  return (
    <Layout>
      <div className="row">
        <h1>New</h1>
        <Link href="/admin" passHref>
          <button>Cancel</button>
        </Link>
      </div>
      <SermonEditor />
      <style jsx>{`
        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: black;
          color: white;
          padding: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </Layout>
  );
}

export default New;
