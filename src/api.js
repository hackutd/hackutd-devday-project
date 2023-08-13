// 1. create constants.js to hold the api url
import { apiBaseURL } from './constants';

/**
 * fetchAllVideos fetches videos from the / API route and returns an array of video objects.
 * All videos are expected to have the following string fields: id, title, and thumnailUrl field.
 *
 * Will reject the Promise if fetch fails or body is not JSON.
 */
export async function fetchAllVideos() {
    // 2. introduce fetch and how it's used to grab api data to our local apps
    const res = await fetch(apiBaseURL);

    // 3. Quickly touch how network codes can show if you got the api (go over the infamous 404)
    console.log(res.status);
    if (res.status !== 200) {
        console.error("API failed to load - Error Code" + res.status);
    }

    // 4. Quickly touch what a json is and that we need things formatted that way
    const data = await res.json();
    

    return data;
}
