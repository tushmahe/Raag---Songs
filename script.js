console.log("Welcome to Raag");

let songIndex = 0;
let c = document.getElementById('0');
c.style.opacity = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('MasterPlay');
let masterPause = document.getElementById('MasterPause');
let mgif = document.getElementById('mgif');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let Time = document.getElementById('time');
let masterTime = document.getElementById('ftime');
let songItems = Array.from(document.getElementsByClassName('item'));

let songs = [
    {songName: "Attention - Charlie Puth", filePath: "1.mp3", coverPath: "1.png", t: "03:33"},
    {songName: "Love Me Like You Do", filePath: "2.mp3", coverPath: "2.jpg", t: "04:09"},
    {songName: "Girlfriend - Charlie Puth", filePath: "3.mp3", coverPath: "3.jpg", t: "02:57"},
    {songName: "Senorita", filePath: "4.mp3", coverPath: "4.jpg", t: "03:11"},
    {songName: "Rabba Mehar Kari", filePath: "5.mp3", coverPath: "5.jpg", t: "03:28"},
    {songName: "Najaa (From Sooryavanshi)", filePath: "6.mp3", coverPath: "6.jpg", t: "03:11"},
    {songName: "Hosanna", filePath: "7.mp3", coverPath: "7.jpg", t: "05:34"},
    {songName: "Liggi - Ritviz", filePath: "8.mp3", coverPath: "8.jpg", t: "03:01"},
    {songName: "Tera Hua", filePath: "9.mp3", coverPath: "9.jpg", t: "03:34"},
    {songName: "We Don't Talk Anymore", filePath: "10.mp3", coverPath: "10.jpg", t: "03:37"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerText = songs[i].t;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPause.style.opacity = 1;
        masterPlay.style.opacity = 0.5;
        mgif.style.opacity = 1;
    }
})
masterPause.addEventListener('click', ()=>{
    if(audioElement.played){
        audioElement.pause();
        masterPause.style.opacity = 0.5;
        masterPlay.style.opacity = 1;
        mgif.style.opacity = 0;
    }
})


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    var ct = parseInt(audioElement.currentTime);
    var min = parseInt(ct/60);
    var sec = ct%60;
    var mins;
    var secs;
    if(min<10){
        mins="0"+min;
    }else{
        mins=min;
    }
    if(sec<10){
        secs="0"+sec;
    }
    else{
        secs=sec;
    }
    var time = mins+":"+secs;
    Time.innerText=time;
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
document.getElementById('0').addEventListener('click', ()=>{
    songIndex=0;
    c.style.opacity = 1;
    c = document.getElementById('0');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('1').addEventListener('click', ()=>{
    songIndex=1;
    c.style.opacity = 1;
    c = document.getElementById('1');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('2').addEventListener('click', ()=>{
    songIndex=2;
    c.style.opacity = 1;
    c = document.getElementById('2');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('3').addEventListener('click', ()=>{
    songIndex=3;
    c.style.opacity = 1;
    c = document.getElementById('3');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('4').addEventListener('click', ()=>{
    songIndex=4;
    c.style.opacity = 1;
    c = document.getElementById('4');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('5').addEventListener('click', ()=>{
    songIndex=5;
    c.style.opacity = 1;
    c = document.getElementById('5');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('6').addEventListener('click', ()=>{
    songIndex=6;
    c.style.opacity = 1;
    c = document.getElementById('6');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('7').addEventListener('click', ()=>{
    songIndex=7;
    c.style.opacity = 1;
    c = document.getElementById('7');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('8').addEventListener('click', ()=>{
    songIndex=8;
    c.style.opacity = 1;
    c = document.getElementById('8');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('9').addEventListener('click', ()=>{
    songIndex=9;
    c.style.opacity = 1;
    c = document.getElementById('9');
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    c.style.opacity = 1;
    c = document.getElementById(`${songIndex}`);
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
        masterPlay.style.opacity = 0.5;
        mgif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    c.style.opacity = 1;
    c = document.getElementById(`${songIndex}`);
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
    masterPlay.style.opacity = 0.5;
    mgif.style.opacity = 1;
})