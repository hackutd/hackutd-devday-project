import { apiBaseURL } from "./constants";

/**
 * fetchAllVideos fetches videos from the / API route and returns an array of video objects.
 * All videos are expected to have the following string fields: id, title, and thumnailUrl field.
 *
 * Will reject the Promise if fetch fails or body is not JSON.
 */
export async function fetchAllVideos() {
  const res = await fetch(apiBaseURL).catch((err) => {
    throw new Error(
      `failed to fetch data from ${apiBaseURL}. err: ${err.message}`
    );
  });
  if (res.status !== 200) {
    throw new Error(
      `failed to fetch data from ${apiBaseURL} with status ${res.status}`
    );
  }

  const data = await res.json().catch((err) => {
    throw new Error(
      `failed to fetch data from ${apiBaseURL}. err: ${err.message}`
    );
  });

  return data;
}

/**
 * fetchVideoById accepts a string id and fetches the respective video (if exists) from the /:id API route and returns a video object.
 * All videos are expected to have the following string fields: id, title, and thumnailUrl field.
 *
 * Will reject the Promise if fetch fails or body is not JSON.
 */
export async function fetchVideoById(id) {
  const url = `${apiBaseURL}/${id}`;
  const res = await fetch(`${apiBaseURL}/${id}`).catch((err) => {
    throw new Error(`failed to fetch data from ${url}. err: ${err.message}`);
  });
  if (res.status !== 200) {
    throw new Error(
      `failed to fetch data from ${url} with status ${res.status}`
    );
  }

  const data = await res.json().catch((err) => {
    throw new Error(`failed to fetch data from ${url}. err: ${err.message}`);
  });

  return data;
}
