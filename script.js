const audio = document.querySelector('#audio').autoplay = true;

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}

let play_ = () => {
    console.log(audio)
    audio.play()
}
play_()
