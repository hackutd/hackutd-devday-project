
import { apiBaseURL } from './constants';

/**
 * fetchAllVideos fetches videos from the / API route and returns an array of video objects.
 * All videos are expected to have the following string fields: id, title, and thumnailUrl field.
 *
 * Will reject the Promise if fetch fails or body is not JSON.
 */
export async function fetchAllVideos() {
    
    const res = await fetch(apiBaseURL);

    
    console.log(res.status);
    if (res.status !== 200) {
        console.error("API failed to load - Error Code" + res.status);
    }

    
    const data = await res.json();
    

    return data;
}

/**
 * fetchVideoById accepts a string id and fetches the respective video (if exists) from the /:id API route and returns a video object.
 * All videos are expected to have the following string fields: id, title, and thumnailUrl field.
 *
 * Will reject the Promise if fetch fails or body is not JSON.
 */
export async function fetchVideoById(id) {
    
    const res = await fetch(`${apiBaseURL}/${id}`);

    if (res.status !== 200) {
        console.error("API failed to load - Error Code" + res.status);
    }

    const data = await res.json();

    return data;
}
