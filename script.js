let song, text;
const audioPlayer = new Audio();

const print_song =document.querySelector(".prt_song");
const list = document.querySelector(".list");
list.addEventListener("click", function (e) {
  e.preventDefault();
  song = e.target.href;
  text = e.target.innerText;
  console.log(e);
  my();
});
function my() {
  audioPlayer.src = song;
  audioPlayer.play();
  print_song.innerText = text;
}
