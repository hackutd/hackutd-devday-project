import { useEffect, useState } from 'react';

import { fetchAllVideos } from '../api';

import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import VideoCard from '../components/VideoCard';

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
        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
            <Navbar />

            <section className="flex w-full flex-col justify-center gap-4 px-[16vw] py-12">
                <h2 className="mb-4 text-2xl font-bold">Anime List</h2>
                {loading ? (
                    <Spinner />
                ) : (
                    <ul className="flex flex-wrap gap-32">
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
        </div>
    );
}
