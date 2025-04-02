const keys = document.querySelectorAll('kbd');

document.addEventListener('keydown', (event) => {
    switch (event.key.toLowerCase()) { // Case-insensitive check
        case 'a':
            addStyle('a');
            playSound('clap');
            break;
        case 's':
            addStyle('s');
            playSound('hi-hat');
            break;
        case 'd':
            addStyle('d');
            playSound('kick');
            break;
        case 'f':
            addStyle('f');
            playSound('open-hit-hat');
            break;
        case 'g':
            addStyle('g');
            playSound('boom');
            break;
        case 'h':
            addStyle('h');
            playSound('ride');
            break;
        case 'j':
            addStyle('j');
            playSound('snare');
            break;
        case 'k':
            addStyle('k');
            playSound('tom');
            break;
    }
});

function addStyle(key) {
    for (let k of keys) {
        if (k.dataset.key == key) {
            const kParent = k.parentElement;
            kParent.className += ' active';
            setTimeout(() => {kParent.classList.remove('active')}, 150);
        }
    }
}

function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
}