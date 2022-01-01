
  function my(){

//     audioPlayer = new Audio(URL="https://drive.google.com/file/d/1ZMO0zxODquRPPEh1hBdKRCVMIgpsmi51/view")
//     var song = URL="https://drive.google.com/file/d/1f_vrRHKCrXVd9q2dx7ZVA07JZEDYBM8S/view"
    const song = new URL('https://drive.google.com/file/d/1f_vrRHKCrXVd9q2dx7ZVA07JZEDYBM8S/view?usp=sharing');
    audioPlayer = new Audio(song)
//     audioPlayer = new Audio("./data/a1.mp3") //  localhost
    audioPlayer.play()
    document.querySelector(".btn_play").style="display: block"
    }

// https://drive.google.com/file/d/1ZMO0zxODquRPPEh1hBdKRCVMIgpsmi51/view?usp=sharing
// https://drive.google.com/file/d/1f_vrRHKCrXVd9q2dx7ZVA07JZEDYBM8S/view?usp=sharing


