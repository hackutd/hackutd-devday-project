import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../assets/play-icon.svg";
import { ReactComponent as ThumbsUpIcon } from "../assets/thumbs-up.svg";
import { ReactComponent as ThumbsDownIcon } from "../assets/thumbs-down.svg";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Spinner from "../components/Spinner";

export default function Video() {
  const [video, setVideo] = useState({
    title: "Cowboy Bebop",
    likes: 100,
    dislikes: 20,
    thumbnail: "https://i.imgur.com/Ea5abYt.png",
  });
  const [loading, setLoading] = useState(false); // TODO: set this to true when fetching video.
  const { id } = useParams();

  // TODO: fetch video by ID here.

  return loading ? (
    <div className="w-screen h-screen bg-primary flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="w-screen min-h-screen bg-primary text-text-primary overflow-x-hidden">
      <Navbar />

      <section className="w-full px-[16vw] py-12 flex flex-col gap-4 justify-center">
        <section>
          <article className="aspect-video bg-black relative rounded-xl">
            <img
              className="w-full h-full"
              src={video.thumbnail}
              alt={video.title}
            />
            <PlayIcon className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </article>
          <article className="flex justify-between font-bold mt-4">
            <h2 className="text-3xl">{video.title}</h2>
            <div className="flex gap-2 items-center">
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
