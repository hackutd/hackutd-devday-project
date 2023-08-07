export default function VideoCard({ id, title, thumbnailURL }) {
  return (
    <a href={`/video/${id}`}>
      <div className="w-[180px] h-[299px] rounded-md overflow-hidden relative text-text-primary">
        <img className="w-full h-full" src={thumbnailURL} alt={title} />
        <div className="w-full h-2/5 bottom-0 absolute bg-gradient-to-t from-black to-transparent z-2"></div>
        <h2 className="font-semibold absolute bottom-5 left-4">{title}</h2>
      </div>
    </a>
  );
}
