const Embed = ({ id }) => (
  <>
    <div className="embed">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <style jsx>{`
      .embed iframe {
        width: 375px;
        height: 200px;
      }
      @media screen and (min-width: 600px) {
        .embed iframe {
          width: 560px;
          height: 315px;
        }
      }
    `}</style>
  </>
);

export default Embed;
