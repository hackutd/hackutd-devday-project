import React from 'react'
import { useState, useEffect } from 'react';

import { fetchAllVideos } from '../api';
import VideoCard from './VideoCard';

function Dashboard() {

    
    const [videos, setVideos] = useState([]);

    /**
     * fetchData fetches all videos and sets the recommendedVideos state.
     * fetchData alerts on error and never rejects.
     * All videos to have the following string fields id, title, and thumnailUrl field.
     */
    async function fetchData() {
    
      const data = await fetchAllVideos();
      
      
  
      setVideos(data);
    }
  
    useEffect(() => {
      fetchData();
    }, []);


  return (
    <ul className="flex flex-wrap gap-32">
        
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