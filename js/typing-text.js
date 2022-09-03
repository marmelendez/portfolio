var i = 0, text;
text = "Welcome to my website!"

function typing() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing();