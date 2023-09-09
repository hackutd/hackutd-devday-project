import logo from './assets/react-logo.png';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';

function App() {
    return (
        <div className="min-h-screen w-screen justify-center overflow-x-hidden bg-primary text-text-primary">
            <Navbar />
            <h1 className="px-8 py-6 text-3xl font-bold">Anime List</h1>

            <ul className="flex flex-wrap gap-32">
                <VideoCard
                    title="Spongebob Squarepants"
                    thumbnailURL="https://m.media-amazon.com/images/M/MV5BNTk2NzEyNTQtZTQ5MS00MjAyLTgzMDMtNDNkYTBkM2M2OTU3XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg"
                />
                <VideoCard
                    title="Bluey"
                    thumbnailURL="https://m.media-amazon.com/images/M/MV5BMDBiNDI3YjQtNDdkNS00ZDliLTlmMmQtMDE4ZWM1ZGIyNjljXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg"
                />
                <VideoCard
                    title="Avatar the Last Airbender"
                    thumbnailURL="https://flxt.tmsimg.com/assets/p186109_b_v8_aa.jpg"
                />
                <VideoCard />
            </ul>
        </div>
    );
}

export default App;
