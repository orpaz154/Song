const sound = ['omeradam','osher','eyal','natangoshen','odeya']
sound.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
   
    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buutons').appendChild(btn)
})
function stopSongs(){
    sound.forEach(sound=>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime =0;


    })
}