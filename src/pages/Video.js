import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchAllVideos, fetchVideoById } from "../api";
import { ReactComponent as ThumbsUpIcon } from "../assets/thumbs-up.svg";
import { ReactComponent as ThumbsDownIcon } from "../assets/thumbs-down.svg";

import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import VideoCard from "../components/VideoCard";

export default function Video() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [videoLoading, setLoading] = useState(true);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [recommendedVideosLoading, setRecommendedVideosLoading] =
    useState(true);

  /**
   * fetchVideo fetches the video by the id in the url parameter and sets the video state.
   * fetchVideo alerts on error and never rejects.
   * All videos to have the following string fields id, title, and thumnailUrl field.
   */
  const fetchVideo = useCallback(async () => {
    if (id) {
      const data = await fetchVideoById(id).catch((err) => {
        alert(err.message);
      });

      setVideo(data);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchVideo();
  }, [fetchVideo]);

  /**
   * fetchRecommendedVideos fetches all videos and sets the recommendedVideos state.
   * fetchRecommendedVideos alerts on error and never rejects.
   * All videos to have the following string fields id, title, and thumnailUrl field.
   */
  const fetchRecommendedVideos = useCallback(async () => {
    if (video) {
      const data = await fetchAllVideos().catch((err) => {
        alert(`Failed to fetch recommended videos: ${err.message}`);
      });

      setRecommendedVideos(data.filter((v) => v.id !== video.id));
      setRecommendedVideosLoading(false);
    }
  }, [video]);

  useEffect(() => {
    fetchRecommendedVideos();
  }, [fetchRecommendedVideos]);

  // Return if video is still loading or video object is null/undefined.
  if (videoLoading || !video) {
    return (
      <div className="w-screen h-screen bg-primary flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-primary text-text-primary overflow-x-hidden">
      <Navbar />

      <section className="w-full px-[16vw] py-12 flex flex-col gap-4 justify-center">
        <section>
          <article className="aspect-video bg-black relative rounded-xl">
            <video
              className="w-full h-full"
              controls
              poster={video.thumbnailUrl}
              autoPlay
              muted
            >
              <source src={video.videoUrl} type="video/mp4" />
            </video>
          </article>
          <article className="flex justify-between font-bold mt-4">
            <h2 className="text-3xl">{video.title}</h2>
            <div className="flex gap-2 items-center">
              {/* TODO: add firebase call for this */}
              {video.likes}
              <ThumbsUpIcon className="w-8 h-8" />
              <ThumbsDownIcon className="w-8 h-8" />
              {video.dislikes}
            </div>
          </article>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold mb-4">Watch more</h3>
          {recommendedVideosLoading ? (
            <Spinner />
          ) : (
            <ul className="flex flex-wrap gap-8">
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
      </section>
    </div>
  );
}
