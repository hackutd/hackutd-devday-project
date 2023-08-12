import Navbar from "./components/Navbar";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    
    <div className="App min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">

      
     

      {/* 2. Update to add a grid section */}
      
      <section className="flex w-full flex-col justify-center gap-4 px-[16vw] py-12">
      <h2 className="mb-4 text-2xl font-bold">Anime List</h2>

      {/* 1. Update the Video Card */}
      {/* 3. Populate to show off grid */}
      <ul className="flex flex-wrap gap-32">
                {/* 4. Introduce props */}
                <VideoCard
                    key={0}
                    title={"Epic Show"}
                />
                <VideoCard
                    key={1}
                    title={"Crazy Show"}
                />
                <VideoCard
                    key={2}
                    title={"Crazier Show"}
                />
                <VideoCard
                    key={3}
                    title={"Craziest Show"}
                />
        </ul>

      </section>
    </div>
  );
}

export default App;
