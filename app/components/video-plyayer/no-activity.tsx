import { useState } from "react";
import VideoPlayer from "./video-palyer";

export default function NoActivityVideo() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="flex items-center gap-4 p-12 flex-col">
      <h1 className="text-2xl font-bold">
        Without <code>Activity</code>
      </h1>
      <button
        className="border px-4 py-2 rounded-lg "
        type="button"
        onClick={() => setShowVideo(!showVideo)}
      >
        {showVideo ? "Hide" : "Show"} Video
      </button>

      {showVideo && <VideoPlayer />}
    </div>
  );
}
