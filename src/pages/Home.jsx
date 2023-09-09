import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

function Home() {
    return (
        <div className="min-h-screen w-screen justify-center overflow-x-hidden bg-primary text-text-primary">
            <Navbar />
            <h1 className="px-8 py-6 text-3xl font-bold">Anime List</h1>
            <Dashboard />
        </div>
    );
}

export default Home;
