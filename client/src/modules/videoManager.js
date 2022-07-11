const baseUrl = '/api/video';
//NOTE: The URL in the baseUrl variable is a relative url -- it doesn't look anything like https://localhost:5001/api/video. This is a benefit of adding the proxy attribute in our package.json file.

export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

export const getVideo = id =>{
  return fetch(`${baseUrl}/GetByIdWithComments?id=${id}`).then(res => res.json())
}

export const getVideoWithComments = () => {
    return fetch(baseUrl + '/getwithcomments').then(res => res.json())
}

export const videoSearch = (searchString, sortDesc) => {
    return fetch(baseUrl + `/search?q=${searchString}`).then(res => res.json())
}