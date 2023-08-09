import Spinner from '../components/Spinner';
import VideoCard from '../components/VideoCard';

export default function RecommendedVideos({ videos, loading }) {
    if (loading) {
        return <Spinner />;
    }

    return (
        <ul className="flex flex-wrap gap-32">
            {videos.map((video) => (
                <VideoCard
                    id={video.id}
                    title={video.title}
                    thumbnailURL={video.thumbnailUrl}
                />
            ))}
        </ul>
    );
}
