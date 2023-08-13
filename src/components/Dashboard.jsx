import React from 'react'
import { useState, useEffect } from 'react';

import { fetchAllVideos } from '../api';
import VideoCard from './VideoCard';

function Dashboard() {

    // 3. Introduce hooks and how we can use them to get data around our app
    const [videos, setVideos] = useState([]);

    /**
     * fetchData fetches all videos and sets the recommendedVideos state.
     * fetchData alerts on error and never rejects.
     * All videos to have the following string fields id, title, and thumnailUrl field.
     */
    async function fetchData() {
    //   2. Get the data from the api.js to this component
      const data = await fetchAllVideos();
      
      
  
      setVideos(data);
    }
  
    useEffect(() => {
      fetchData();
    }, []);

//   1. Move the list from the homepage to this component
  return (
    <ul className="flex flex-wrap gap-32">
        {/* 4. Update the props to incorporate the data from the api */}
    {videos.map((video) => (
        <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnailURL={video.thumbnailUrl}
        />
    ))}
    </ul>
  );
}

export default Dashboard