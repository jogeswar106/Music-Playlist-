console.log("Welcome to new life ");
let songIndex=0;
let audioElement = new Audio('music.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs =[
    
    { songName: "king",filepath:"song/music.mp3",coverPath: "covers/song image.jpg"},
    { songName: "king",filepath:"song/music.mp3",coverPath: "covers/song image.jpg"},
    { songName: "king",filepath:"song/music.mp3",coverPath: "covers/song image.jpg"},
    { songName: "king",filepath:"song/music.mp3",coverPath: "covers/song image.jpg"},
]

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;

})