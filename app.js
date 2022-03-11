const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  //App Sounds
  const sounds = document.querySelectorAll(".sound-picker button");

  //Time display
  const timeDisplay = document.querySelector(".time-display");

  //Get the length of the outline
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);

  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //Play sound
  play.addEventListener("click", () => {
    song.play();
  });
};
app();
