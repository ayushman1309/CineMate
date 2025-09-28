import React, { useState } from "react";
import ReactPlayer from "react-player";            // keep direct import with Vite
import { PlayCircleIcon } from "lucide-react";
import BlueCircle from "./BlurCircle";
import { dummyTrailers } from "../assets/assets";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px]">Trailers</p>

      {/* Main Player */}
      <div className="relative mt-6 flex justify-center">
        <BlueCircle top="-100px" right="-100px" />
        <div className="rounded-xl shadow-lg overflow-hidden" style={{ width: 960, height: 540 }}>
          {/* <ReactPlayer
            key={currentTrailer.videoUrl}          // remount ensures fresh load when switching
            url={currentTrailer.videoUrl}          // e.g. "/videos/demo.mp4" if in public/videos
            playing
            muted                                  // enables autoplay on most browsers
            controls
            playsinline                            // prevents iOS fullscreen/black frames
            width="100%"
            height="100%"
            config={{
              file: {
                forceVideo: true,
                attributes: {
                  preload: "metadata",
                  poster: currentTrailer.image || undefined,
                },
              },
            }}
            onError={(e) => console.warn("ReactPlayer error:", e)}
          /> */}

          <iframe src={currentTrailer.videoUrl} className="h-full w-full"/>
        </div>
      </div>

      {/* Trailer Thumbnails */}
      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <button
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max:md:h-60 md:max-h-60 cursor-pointer text-left"
          >
            <img
              src={trailer.image}
              alt={trailer.title || "Trailer"}
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 -translate-x-1/2 -translate-y-1/2"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;