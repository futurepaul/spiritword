export default function FormError({ error }) {
  return error ? (
    <div>
      <span role="alert">{error.message}</span>
      <style jsx>{`
        span {
          color: red;
        }
      `}</style>
    </div>
  ) : null;
}
