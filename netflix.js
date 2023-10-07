let leftarr=document.querySelector('#left');
let rightarr=document.querySelector('#right');
let popular1=document.querySelector('.popular1');
leftarr.addEventListener('click', () =>{
    popular1.scrollLeft += 270;
})
rightarr.addEventListener('click', () =>{
    popular1.scrollLeft -= 270;
})
let left=document.querySelector('#leftarr');
let right=document.querySelector('#rightarr');
let Artist=document.querySelector('.artist');
left.addEventListener('click',()=>{
    Artist.scrollLeft +=330;
})
right.addEventListener('click',()=>{
    Artist.scrollLeft -=330;
})
let wave=document.querySelector('.wave');
let start=document.querySelector('.started');
let music = new Audio('');
let songs=document.querySelectorAll('.music');
for(song of songs){
    song.addEventListener('click',(elem)=>{
        let t=elem.target.id;
        // music.src=`audio/${t}.mp3`;
        console.log(t);
        })
        if( music.paused ||music.currentTime <=0 ){
            wave.classList.toggle('active1');
            start.classList.toggle('bi-play-fill');
            start.classList.toggle('bi-pause-fill');
            music.play()
        }
        else {
            wave.classList.toggle('active1');
            start.classList.toggle('bi-play-fill');
            start.classList.toggle('bi-pause-fill');
            music.pause();
        }
    
}
start.addEventListener('click',()=>{
    if( music.paused ||music.currentTime <=0 ){
        wave.classList.toggle('active1');
        start.classList.toggle('bi-play-fill');
        start.classList.toggle('bi-pause-fill');
        music.play();
    }
    else {
        wave.classList.toggle('active1');
        start.classList.toggle('bi-play-fill');
        start.classList.toggle('bi-pause-fill');
        music.pause();
    }
})
let img=document.querySelector('#poster_image1');
let select=document.querySelectorAll('.playlistplays');
for(ong of select){
    ong.addEventListener('click',async function(el){
        console.dir(ong);
        let t=await el.target.id;
        // music.src=`audio/${t}.mp3`;
        // console.dir(ong);
        console.log(t);
    })
}   


