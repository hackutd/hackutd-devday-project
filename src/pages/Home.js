import { useEffect, useState } from "react";

import { fetchAllVideos } from "../api";

import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  /**
   * fetchData fetches all videos and sets the recommendedVideos state.
   * fetchData alerts on error and never rejects.
   * All videos to have the following string fields id, title, and thumnailUrl field.
   */
  async function fetchData() {
    const data = await fetchAllVideos().catch((err) => {
      alert(`Failed to fetch recommended videos: ${err.message}`);
    });

    setRecommendedVideos(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
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
              <a href={`/video/${video.id}`}>
                <VideoCard
                  title={video.title}
                  thumbnailURL={video.thumbnailUrl}
                />
              </a>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
