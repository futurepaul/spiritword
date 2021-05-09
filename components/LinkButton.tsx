import Link from "next/link";

export default function LinkButton({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <>
      <Link href={href}>
        <a>
          <div className="card">{title}</div>
        </a>
      </Link>
      <style jsx>{`
        .card {
          margin-top: 1rem;
          margin-right: 0.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          background-color: black;
          height: 50px;
        }

        .card img {
          margin-right: 0.5em;
        }

        .card:hover,
        .card:focus,
        .card:active {
          border-color: black;
          text-decoration: underline;
        }

        .card h3 {
          font-size: 1.5rem;
        }

        .card p {
          font-size: 1.25rem;
          line-height: 1.5;
        }

        a {
          cursor: pointer;
          color: white;
        }
      `}</style>
    </>
  );
}
