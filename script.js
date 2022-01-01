let song;
const audioPlayer = new Audio();

const list = document
  .querySelector(".list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    song = e.target.href;
    my();
  });
function my() {
  audioPlayer.src = song;
  audioPlayer.play();
}

//     audioPlayer = new Audio(URL="https://drive.google.com/file/d/1ZMO0zxODquRPPEh1hBdKRCVMIgpsmi51/view")
//     const song = "https://drive.google.com/file/d/1f_vrRHKCrXVd9q2dx7ZVA07JZEDYBM8S/view?usp=sharing"
//     const song = 'https://drive.google.com/file/d/1f_vrRHKCrXVd9q2dx7ZVA07JZEDYBM8S.mp3';

//     audioPlayer = new Audio("./data/a1.mp3") //  localhost

// https://drive.google.com/file/d/1ZMO0zxODquRPPEh1hBdKRCVMIgpsmi51/view?usp=sharing
// https://drive.google.com/file/d/1f_vrRHKCrXVd9q2dx7ZVA07JZEDYBM8S/view?usp=sharing
// https://drive.google.com/file/d/1f_vrRHKCrXVd9q2dx7ZVA07JZEDYBM8S/view?usp=sharing
