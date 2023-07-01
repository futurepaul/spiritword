import Image from "next/image";
import { SupaSermon, toPrettyDate } from "../lib/sermon";
import Link from "next/link";

interface SingleSermonProps {
  sermon: SupaSermon;
  deleteSermon: (id: number) => void;
}

export default function SingleSermon({
  sermon,
  deleteSermon,
}: SingleSermonProps) {
  const { id, date, title, youtube_id, pdf } = sermon;

  const warnThenDelete = () => {
    const isSure = confirm(`Are you sure you want to delete ${title}?`);
    if (isSure) {
      deleteSermon(id);
    }
  };

  return (
    <div className="single">
      <h1>{toPrettyDate(date)}</h1>
      <h2>{title}</h2>
      {youtube_id && (
        <a href={`https://youtu.be/${youtube_id}`}>
          <Image
            src={`https://i3.ytimg.com/vi/${youtube_id}/hqdefault.jpg`}
            width="240"
            height="180"
          />
        </a>
      )}
      <code>
        <p>date: "{date}"</p>
        <p>title: "{title}"</p>
        {youtube_id && <p>youtubeId: "{youtube_id}"</p>}
        {pdf && <p>sermonPdf="{pdf}"</p>}
      </code>
      <div className="buttons">
        <Link href={`/edit?id=${id}`}>
          <button>Edit</button>
        </Link>
        <div className="spacer" />
        <button onClick={warnThenDelete}>Delete</button>
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
