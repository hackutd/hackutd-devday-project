function VideoCard(props) {
    return (
        <div className="relative m-8 h-[299px] w-[180px] overflow-hidden rounded-md bg-secondary">
            <img src={props.thumbnailURL} alt={props.title} />
            <div className="absolute bottom-0 h-2/5 w-full rounded-md bg-gradient-to-t from-black to-transparent"></div>
            <h1 className="absolute bottom-4 left-4 font-semibold">
                {props.title}
            </h1>
        </div>
    );
}

export default VideoCard;
