import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAllVideos, fetchVideoById } from '../api';
import { ReactComponent as ThumbsUpIcon } from '../assets/thumbs-up.svg';
import { ReactComponent as ThumbsDownIcon } from '../assets/thumbs-down.svg';

import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import VideoCard from '../components/VideoCard';

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
            <div className="flex h-screen w-screen items-center justify-center bg-primary">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
            <Navbar />

            <section className="flex w-full flex-col justify-center gap-4 px-[16vw] py-12">
                <section>
                    <article className="relative aspect-video rounded-xl bg-black">
                        <video
                            className="h-full w-full"
                            controls
                            poster={video.thumbnailUrl}
                            autoPlay
                            muted
                        >
                            <source src={video.videoUrl} type="video/mp4" />
                        </video>
                    </article>
                    <article className="mt-4 flex justify-between font-bold">
                        <h2 className="text-3xl">{video.title}</h2>
                        <div className="flex items-center gap-2">
                            {/* TODO: add firebase call for this */}
                            {video.likes}
                            <ThumbsUpIcon className="h-8 w-8" />
                            <ThumbsDownIcon className="h-8 w-8" />
                            {video.dislikes}
                        </div>
                    </article>
                </section>

                <section className="mt-12">
                    <h3 className="mb-4 text-xl font-bold">Watch more</h3>
                    {recommendedVideosLoading ? (
                        <Spinner />
                    ) : (
                        <ul className="flex flex-wrap gap-8">
                            {recommendedVideos.map((video) => (
                                <VideoCard
                                    id={video.id}
                                    title={video.title}
                                    thumbnailURL={video.thumbnailUrl}
                                />
                            ))}
                        </ul>
                    )}
                </section>
            </section>
        </div>
    );
}
