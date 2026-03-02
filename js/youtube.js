
const API_KEY = "AIzaSyCTqXue0jpubIfHlRMkryJLgYDJx_KD8GI";
const CHANNEL_ID = "UC9tZ0VTMQoNqT1L-ADss1YQ";

const URL =
`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`;

fetch(URL)
  .then(res => res.json())
  .then(data => {

    let container = document.getElementById("video-container");

    data.items.forEach(video => {

      if (video.id.videoId) {

        container.innerHTML += `
          <div class="video-card">
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
              <img src="${video.snippet.thumbnails.high.url}">
              <div class="title">${video.snippet.title}</div>
            </a>
          </div>
        `;
      }

    });

  });
