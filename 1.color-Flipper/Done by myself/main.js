const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "yellow", "pink", "purple", "orange", "black", "white", "brown", "grey", "violet", "indigo", "maroon", "navy", "olive", "teal", "aqua", "lime", "magenta", "silver", "cyan", "gold", "coral", "crimson", "fuchsia", "khaki", "lavender", "plum", "turquoise", "wheat", "beige", "azure", "chocolate", "salmon", "sienna", "tan", "tomato", "violet", "orchid", "peach", "peru", "pink", "powderblue", "rosybrown", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet", "wheat", "whitesmoke", "yellow", "yellowgreen"];
console.log(colors.length);

const btn = document.getElementById('simple');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.style = "font-size: 2rem; font-weight: bold; color: black;";
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
const btn2 = document.getElementById('hex');

btn2.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.style = "font-size: 2rem; font-weight: bold; color: black;";
    color.textContent = hexColor;
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
