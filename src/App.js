import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';

function App() {
    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
            <Navbar />
            {/* update the padding to demonstrate tailwind more */}
            <h1 className=" px-8 py-6 text-3xl font-bold ">Anime List</h1>
            <VideoCard />
        </div>
    );
}

export default App;
