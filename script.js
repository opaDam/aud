const audio_ = document.querySelector('#audio').autoplay = true;

if (audio_ !== undefined) {
  audio_.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}

let play_ = () => {
    console.log(audio_)
    audio_.play()
}
play_()
