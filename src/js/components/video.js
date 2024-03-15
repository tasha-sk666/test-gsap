const video = document?.querySelector(".info__video");
const playButton = document?.querySelector(".info__play");

playButton?.addEventListener("click", () => {
  if (video.paused === true) {
    video.play();
    playButton.classList.add("info__play--hidden");
  } else {
    video.pause();
    playButton.classList.remove("info__play--hidden");
  }
});

video?.addEventListener("ended", () => {
  video.src = video.src;
  playButton.classList.remove("info__play--hidden");
});
