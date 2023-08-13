import React from 'react'

// 1. update the props to take in the elements from the api
function VideoCard({ id, title, thumbnailURL }) {
  return (
    
      <div className="relative h-[299px] w-[180px] overflow-hidden rounded-md text-text-primary hover:scale-105 duration-300">
          <img className="h-full w-full" src={thumbnailURL} alt={title} />
          <div className="z-2 absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent"></div>
          <h2 className="absolute bottom-5 left-4 font-semibold">
              {title}
          </h2>
      </div>
    
  )
}

export default VideoCard