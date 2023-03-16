// declaracion de variable con los colores que se van a usar
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "yellow", "pink", "purple", "orange", "black", "white", "brown", "grey", "violet", "indigo", "maroon", "navy", "olive", "teal", "aqua", "lime", "magenta", "silver", "cyan", "gold", "coral", "crimson", "fuchsia", "khaki", "lavender", "plum", "turquoise", "wheat", "beige", "azure", "chocolate", "salmon", "sienna", "tan", "tomato", "violet", "orchid", "peach", "peru", "pink", "powderblue", "rosybrown", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet", "wheat", "whitesmoke", "yellow", "yellowgreen"];
console.log(colors.length);
// declaracion de boton y la etiqueta .color del html
const btn = document.getElementById('simple');
const color = document.querySelector('.color');
// funcion que escucha el click del boton
btn.addEventListener('click', function () {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // quiero que si el fondo es negro haga msi letras blancas
    if (colors[randomNumber] === 9) {
        document.body.style = "font-size: 2rem; font-weight: bold; color: white;";
    }

const backgroundColor = colors[randomNumber];
    document.body.style.backgroundColor = backgroundColor;
    color.style = "font-size: 2rem; font-weight: bold; color: black;";
    color.textContent = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

// boton hex y funcion de crear un color aleatorio en valor hexadecimal
const btn2 = document.getElementById('hex');
// funcion que escucha el click del boton
btn2.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    // hace que el color de fondo sea el color aleatorio
    document.body.style.backgroundColor = hexColor;
    color.style = "font-size: 2rem; font-weight: bold; color: black;";
    color.textContent = hexColor;
});
// declara la variable hex con los valores de 0 a 9 y de A a F
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// funcion que devuelve un numero aleatorio entre 0 y 15
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
// 
const btn3 = document.getElementById('refresh')
btn3.addEventListener('click', function () {
    location.reload();
});