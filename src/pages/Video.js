import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchVideoById } from '../api';
import { ReactComponent as ThumbsUpIcon } from '../assets/thumbs-up.svg';
import { ReactComponent as ThumbsDownIcon } from '../assets/thumbs-down.svg';

import Dashboard from '../components/Dashboard';

export default function Video() {
    
    const { id } = useParams();

    const [video, setVideo] = useState(null);

    /**
     * fetchVideo fetches the video by the id in the url parameter and sets the video state.
     * fetchVideo alerts on error and never rejects.
     * All videos to have the following string fields id, title, and thumnailUrl field.
     */
    const fetchVideo = useCallback(async () => {
        if (id) {
            const data = await fetchVideoById(id).catch((err) => {
                alert(err.message);
            });
            
            console.log(data.title)
            setVideo(data);
            
        }
    }, [id]);

    useEffect(() => {
        fetchVideo();
    }, [fetchVideo]);

   if (!video) {
    return null;
   }

    return (
        
        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
            

            <section className="flex w-full flex-col justify-center gap-4 px-[16vw] py-12">
                
                <section>
                    
                    
                    <article className="relative aspect-video rounded-xl bg-black">
                        
                        <video
                            className="h-full w-full"
                            controls
                            poster={video.thumbnailUrl}
                            
                            muted
                        >
                            <source src={video.videoUrl} type="video/mp4" />
                        </video>
                    </article>

                    
                    <article className="mt-4 flex justify-between font-bold">
                        <h2 className="text-3xl">{video.title}</h2>
                        <div className="flex items-center gap-2">
                            
                            
                            <ThumbsUpIcon className="h-8 w-8 hover:scale-110 hover:text-green-400 duration-300" />
                            <ThumbsDownIcon className="h-8 w-8 hover:scale-110 hover:text-red-400 duration-300" />
                            
                        </div>
                    </article>
                </section>

                

                <section className="mt-12">
                    <h3 className="mb-4 text-xl font-bold">Watch more</h3>
                    <Dashboard/>
                </section>
            </section>
        </div>
    );
}
