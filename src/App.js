import { useEffect, useState } from 'react';
// 3. Create the Dashboard component
import Dashboard from "./components/Dashboard";
// 1. Create the api.js and constants.js
import { fetchAllVideos, fetchVideoById } from "./api";

function App() {


  
  return (
    <div className="App min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
      

      <section className="flex w-full flex-col justify-center gap-4 px-[16vw] py-12">
        <h2 className="mb-4 text-2xl font-bold">Anime List</h2>

        {/* 2. Remove the list in here to a seperate Dashboard component */}
        {/* 3. Inside the dashboard component, map the api elements to video cards */}
        {/* 4. Update the video cards to take input from the api */}
        <Dashboard/>

      </section>
    </div>
  );
}

export default App;
