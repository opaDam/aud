let song, text;
const audioPlayer = new Audio();

const print_song =document.querySelector(".prt_song");
const list = document.querySelector(".list");
list.addEventListener("click", function (e) {
  e.preventDefault();
//   song = e.target.href;
  text = e.target.innerText;
  console.log(e);
  my();
});
function my() {
//   song =  "https://www.pengshu.net/lyrics/content/songs/zhui_meng_chi_zi_xin.mp3"
//   song = "https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"
//   song = "https://archive.org/details/CelineDion_A-New-Day-Has-Come_03222002/01+I'm+Alive.mp3"
  song = "https://archive.org/details/super-romantic-collection-vol.1-10/Super+Romantic+Collection+(Vol.1-10)/CD-01/001+Marilyn+Monroe+-+I+wanna+be+loved+by+You.mp3"
  audioPlayer.src = song;
  audioPlayer.play();
  print_song.innerText = text;
}
