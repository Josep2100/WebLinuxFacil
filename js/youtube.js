const API_KEY = "AIzaSyCTqXue0jpubIfHlRMkryJLgYDJx_KD8GI";
const CHANNEL_ID = "UC5LxrchV-nNK5gYJa0Ipsbw";

const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&key=${API_KEY}`;

fetch(URL)
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("video-container");

    if (!data.items || data.items.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>No se encontraron videos.</p>";
        return;
    }

    data.items.forEach(video => {

        container.innerHTML += `
            <div class="video-card">
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                    <img src="${video.snippet.thumbnails.high.url}">
                    <div class="title">${video.snippet.title}</div>
                </a>
            </div>
        `;
    });

  })
  .catch(error => {
      document.getElementById("video-container").innerHTML =
      "<p style='text-align:center;'>Error al conectar con la API.</p>";
  });
