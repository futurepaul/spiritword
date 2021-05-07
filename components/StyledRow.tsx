export default function StyledRow({ children }) {
  return (
    <div className="row">
      {children}
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
    </div>
  );
}
