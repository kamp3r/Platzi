import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('video');
const player =  new MediaPlayer({element: video, plugins:[new AutoPlay()]});


const buttonP = document.getElementById('playPause');
const buttonM = document.getElementById('muteUnmute');
buttonP.onclick = () => player.togglePlay();
buttonM.onclick = () => player.toggleMute();