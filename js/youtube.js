const API_KEY = "AIzaSyCTqXue0jpubIfHlRMkryJLgYDJx_KD8GI";
const CHANNEL_USERNAME = "josepcalvoasix";

fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${CHANNEL_USERNAME}&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {

    const uploadsPlaylistId = data.items[0].contentDetails.relatedPlaylists.uploads;

    return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${uploadsPlaylistId}&key=${API_KEY}`);
  })
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("video-container");

    data.items.forEach(item => {

      const videoId = item.snippet.resourceId.videoId;

      container.innerHTML += `
        <div class="video-card">
          <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
            <img src="${item.snippet.thumbnails.high.url}">
            <div class="title">${item.snippet.title}</div>
          </a>
        </div>
      `;
    });

  })
  .catch(error => {
    document.getElementById("video-container").innerHTML =
    "<p style='text-align:center;'>No se pudieron cargar los videos.</p>";
  });
