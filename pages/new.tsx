import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../lib/initSupabase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function toHtmlDate(date: Date): string {
  // May 19, 2021
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateString = date.toLocaleDateString("en-US", options);
  return dateString;
}

function youtubeIdfromUrl(url: string): string {
  // https://youtu.be/AJMgmI6ndVM
  // https://www.youtube.com/watch?v=AJMgmI6ndVM
  if (url.startsWith("https://youtu.be") || url.startsWith("youtu.be")) {
    let [_head, tail] = url.split("youtu.be/");
    return tail;
  } else {
    let [_head, tail] = url.split("watch?v=");
    return tail;
  }
}

interface FormSermon {
  title: string;
  date: Date;
  pdf: FileList;
  youtube: string;
}

interface SupaSermon {
  sermon_date: string;
  sermon_title: string;
  sermon_youtube_id: string;
  sermon_pdf: string;
}

function SermonEditor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSermon>();

  const router = useRouter();

  const addSermon = async (sermon: SupaSermon) => {
    console.log("submitting sermon: ", sermon);
    let { data: _data, error } = await supabase
      .from("sermons")
      .insert(sermon)
      .single();
    if (error) console.error(error);
    else {
      console.log("success");
      router.push("/admin");
    }
  };

  const onSubmit = (data: FormSermon) => {
    const { title, date, pdf, youtube } = data;
    let embedId = youtubeIdfromUrl(youtube);
    let file = pdf[0];
    let fixedDate = toHtmlDate(date);
    let sermon = {
      sermon_date: fixedDate,
      sermon_title: title,
      sermon_youtube_id: embedId,
      sermon_pdf: file.name,
    };
    addSermon(sermon);
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
          <input type="submit" />
        </div>
      </form>
      <style jsx>{`
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