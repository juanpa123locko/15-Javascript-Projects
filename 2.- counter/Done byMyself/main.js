let count = 0;

const number = document.getElementById("number");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            number.style.color = "green";
        }
        if (count < 0) {
            number.style.color = "red";
            number.textContent = count;
        }
        if (count === 0) {
            number.style.color = "#222";
        }
        number.textContent = count;
    });
});