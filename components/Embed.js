import { useState, useEffect } from "react";
import Image from "next/image";
import YouTube from "@u-wave/react-youtube";

function useMedia(queries, values, defaultValue) {
  // So next.js doesnt get mad
  if (!process.browser) return defaultValue;
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    // Return related value or defaultValue if none
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };

  // State and setter for matched value
  const [value, setValue] = useState(getValue);

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach((mql) => mql.addListener(handler));
      // Remove listeners on cleanup
      return () =>
        mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
}

const Embed = ({ id }) => {
  const [showVideo, setShowVideo] = useState(false);

  const { width, height } = useMedia(
    // Media queries
    ["(max-width: 599px)", "(min-width: 600px)"],
    // Embed sizes
    [
      { width: "375", height: "200" },
      { width: "560", height: "315" },
    ],
    // Default size
    { width: "560", height: "315" }
  );
  return (
    <>
      <div className="embed">
        {!showVideo ? (
          <div className="placeholder" onClick={() => setShowVideo(true)}>
            <Image
              src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
              width={width}
              height={height}
            />
            <h2>Watch</h2>
          </div>
        ) : (
          <YouTube
            video={id}
            width={width}
            height={height}
            autoplay
            modestBranding
            showRelatedVideos={false}
          />
        )}
      </div>
      <style jsx>{`
        .placeholder {
          position: relative;
          cursor: pointer;
        }

        .placeholder h2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          background-color: rgba(0, 0, 0, 0.2);
          padding: 2rem;
          border-radius: 1rem;
        }

        .placeholder h2:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .embed {
          width: 375px;
          height: 200px;
        }
        @media screen and (min-width: 600px) {
          .embed {
            width: 560px;
            height: 315px;
          }
        }
      `}</style>
    </>
  );
};

export default Embed;
