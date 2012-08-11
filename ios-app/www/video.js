/**
    * Display an intent to play the video.
    *
    * @param url           The url to play
    */
  play(url);
  
window.plugins.videoPlayer.play("http://www.youtube.com/watch?v=2DJz0og157g");

function play() {
   var video = document.getElementById('video');
   video.addEventListener('click',function(){
      video.play();
   },false);
}
  
  