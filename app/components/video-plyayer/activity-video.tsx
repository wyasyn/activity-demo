import { Activity, useState } from "react";
import VideoPlayer from "./video-palyer";

export default function ActivityVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex items-center gap-4 p-12 flex-col">
      <h1 className="text-2xl font-bold">
        Using <code>Activity</code>
      </h1>
      <button
        className="border px-4 py-2 rounded-lg "
        type="button"
        onClick={() => setShowVideo(!showVideo)}
      >
        {showVideo ? "Hide" : "Show"} Video
      </button>

      <Activity mode={showVideo ? "visible" : "hidden"}>
        <VideoPlayer />
      </Activity>
    </div>
  );
}
