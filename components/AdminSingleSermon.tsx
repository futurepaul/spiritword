import Image from "next/image";
import { SupaSermon } from "../lib/sermon";

export default function SingleSermon({
  date,
  title,
  youtube_id,
  pdf,
}: SupaSermon) {
  return (
    <div className="single">
      <h1>{date.toString()}</h1>
      <h2>{title}</h2>
      <a href={`https://youtu.be/${youtube_id}`}>
        <Image
          src={`https://i3.ytimg.com/vi/${youtube_id}/hqdefault.jpg`}
          width="240"
          height="180"
        />
      </a>
      <code>
        <p>date: "{date}"</p>
        <p>title: "{title}"</p>
        <p>youtubeId: "{youtube_id}"</p>
        {pdf && <p>sermonPdf="{pdf}"</p>}
      </code>
      <div className="buttons">
        <button>Edit</button>
        <div className="spacer" />
        <button>Delete</button>
      </div>
      <style jsx>{`
        h1,
        h2 {
          margin-bottom: 0.5rem;
        }
        p {
          margin-top: 0.5rem;
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
