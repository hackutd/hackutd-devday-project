import { useEffect, useState } from 'react';

import Dashboard from "./components/Dashboard";
// 2. Create the video page
import Video from './pages/Video';
// 1. Update api.js
import { fetchAllVideos, fetchVideoById } from "./api";

function App() {


  
  return (
    // 4. Replace the view to show the video page
    <Video/>
    // <div className="App min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
      

    //   <section className="flex w-full flex-col justify-center gap-4 px-[16vw] py-12">
    //     <h2 className="mb-4 text-2xl font-bold">Anime List</h2>


    //     <Dashboard/>

    //   </section>
    // </div>
  );
}

export default App;
