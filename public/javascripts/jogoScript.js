const baseUrl = "http://localhost:5000";

window.addEventListener("DOMContentLoaded", async function changeOpenCriticScore() {
  const title = document.getElementById("title").innerText;
  const score = document.getElementById("score");

  const { data } = await axios.get(`${baseUrl}/openCritic/score/${title}`);
  const { openCriticScore } = data;

  score.innerText = openCriticScore;
});

window.addEventListener("DOMContentLoaded", async function changePsStore() {
  const title = document.getElementById("title").innerText;
  const anchor = document.getElementById("psStore-anchor");
  const psPrice = document.getElementById("psStore-price");

  const { data } = await axios.get(`${baseUrl}/psStore/${title}`);
  const { psStorePrice, psStoreUrl } = data;

  anchor.href = psStoreUrl;
  psPrice.innerText = psStorePrice;
});

window.addEventListener("DOMContentLoaded", async function changeSteam() {
  const title = document.getElementById("title").innerText;
  const anchor = document.getElementById("steam-anchor");
  const price = document.getElementById("steam-price");

  const { data } = await axios.get(`${baseUrl}/steam/${title}`);
  const { steamPrice, steamUrl } = data;

  anchor.href = steamUrl;
  price.innerText = steamPrice;
});

window.addEventListener("DOMContentLoaded", async function changeEpic() {
  const title = document.getElementById("title").innerText;
  const anchor = document.getElementById("epic-anchor");
  const price = document.getElementById("epic-price");

  const { data } = await axios.get(`${baseUrl}/epic/${title}`);
  const { epicPrice, epicUrl } = data;

  anchor.href = epicUrl;
  price.innerText = epicPrice;
});

window.addEventListener("DOMContentLoaded", async function changeYoutubeVideos() {
  const title = document.getElementById("title").innerText;
  const streamers = document.getElementById('streamers');

  const { data } = await axios.get(`${baseUrl}/youtube/${title}`);
  const { topFour } = data;
  
  while (streamers.firstChild) {
    streamers.removeChild(streamers.lastChild);
  }

  topFour.forEach(element => {
    streamers.insertAdjacentHTML("beforeend", `
      <div class="sm:w-1/3 my-5 mx-3 text-center sm:mb-5">
        <div>
          <iframe class="max-w-full m-auto" src="https://www.youtube.com/embed/${element}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `)
  });

});
