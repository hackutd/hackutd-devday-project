import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { apiBaseURL } from "../constants";
import Spinner from "../components/Spinner";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseURL}`)
      .then((r) => r.json())
      .then(setRecommendedVideos)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-screen min-h-screen bg-primary text-text-primary overflow-x-hidden">
      <Navbar />

      <section className="w-full px-[16vw] py-12 flex flex-col gap-4 justify-center">
        <h2 className="text-2xl font-bold mb-4">Anime List</h2>
        {loading ? (
          <Spinner />
        ) : (
          <ul className="flex flex-wrap gap-32">
            {recommendedVideos.map((video) => (
              <VideoCard
                title={video.title}
                thumbnailURL={video.thumbnailUrl}
              />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
