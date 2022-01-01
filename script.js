let song;
const audioPlayer = new Audio();

const list = document.querySelector(".list");
list.addEventListener("click", function (e) {
  e.preventDefault();
  song = e.target.href;
  my();
});
function my() {
  audioPlayer.src = song;
  audioPlayer.play();
}
