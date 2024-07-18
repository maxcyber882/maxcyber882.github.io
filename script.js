const text = "maxcyber";
let index = 0;
const speed = 170; // Speed of typing
const cursor = '<span class="cursor">|</span>';

function typeWriter() {
    if (index < text.length) {
        document.getElementById("output").innerHTML = '<span id="prompt">~$ </span>' + text.substring(0, index + 1) + cursor;
        index++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("output").innerHTML = '<span id="prompt">~$ </span>' + text; // Remove cursor after typing
    }
}

window.onload = typeWriter;
