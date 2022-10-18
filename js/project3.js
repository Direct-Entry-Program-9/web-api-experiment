const inputs = ['Direct Entry Program',
    '#1 SE',
    'Pissange Ambalama'];
const text = document.getElementById('text');

let erase = false;
let charIndex = 1;
let index = 0;

const typeText = ()=> {
    if (!erase){
        text.innerText = inputs[index].substring(0, charIndex++);
        if (charIndex === (inputs[index].length + 15)){
            charIndex = inputs[index].length;
            erase = true;
        }
    }
};
const eraseText = ()=> {
    if (erase){
        text.innerText = inputs[index].substring(0, charIndex--);
        if (charIndex === 0){
            erase = false;
            index++;
            if (index === inputs.length) index = 0;
        }
    }
};

let t1 = 0, t2 = 0;

function animateText(timestamp){
    if (!t1) t1 = timestamp;
    if (!t2) t2 = timestamp;

    const diff1 = timestamp - t1;
    const diff2 = timestamp - t2;

    if (diff1 >= 65){
        t1 = timestamp;
        typeText();
    }

    if (diff2 >= 25){
        t2 = timestamp;
        eraseText();
    }

    requestAnimationFrame(animateText);
}

requestAnimationFrame(animateText);