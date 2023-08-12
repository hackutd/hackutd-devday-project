import React from 'react'

function VideoCard(props) {
  return (
    <div className="bg-secondary relative h-[299px] w-[180px] overflow-hidden rounded-md text-text-primary">
    {/* Updated to include the text & gradient */}
    <div className="z-2 absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent"></div>
    <h2 className="absolute bottom-5 left-4 font-semibold">
        {props.title}
    </h2>
</div>
  )
}

export default VideoCard