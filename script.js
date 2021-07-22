// Events
//Pressed buttons
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
    console.log('pressed: ', event.code.toLowerCase());
});

//play button
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    console.log('play: ', song);

    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
        console.log('Song Array: ', songArray);
    }
});

//Functions
//Play sound
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    console.log(
        'Audio Element: ', audioElement,
        'Key Element: ', keyElement
    );

    if (audioElement) {
        //play the song of the pressed button
        audioElement.currentTime = 0;
        audioElement.play();
    } else {
        //song doesn't exist
        console.log('Does not exist: ', audioElement);
    }

    if (keyElement) {
        //paint the pressed button
        //add active
        keyElement.classList.add('active');

        //remove active
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);

    } else {
        console.log('Does not exist: ', keyElement)
    }

};

function playComposition(songArray) {
    //play composition sounds
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
            console.log('wait: ', wait);
        }, wait);

        wait += 250;
    }
}