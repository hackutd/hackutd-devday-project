import { useParams } from "react-router-dom";
import { ReactComponent as ThumbsUpIcon } from "../assets/thumbs-up.svg";
import { ReactComponent as ThumbsDownIcon } from "../assets/thumbs-down.svg";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { apiBaseURL } from "../constants";

export default function Video() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiBaseURL}/${id}`)
      .then((r) => {
        console.log(r);
        return r;
      })
      .then((r) => r.json())
      .then((video) => setVideo(video))
      .finally(() => setLoading(false));
  }, [id]);

  return loading || !video ? (
    <div className="w-screen h-screen bg-primary flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
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
          <h3 className="text-xl font-bold">Watch more</h3>
          <ul>{/* TODO: list video cards here */}</ul>
        </section>
      </section>
    </div>
  );
}
