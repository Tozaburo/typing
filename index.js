var ty = -10;
var y = 0;
var caret = "";
var height = 1000;

setInterval(() => {
    if (ty != window.scrollY) {
        scroll();
    }
    if (Math.round(Date.now() / 500) % 2 == 0) {
        if (caret == "ǀ") {
            scroll();
        }
        caret = "";
    } else {
        if (caret == "") {
            scroll();
        }
        caret = "ǀ";
    }

}, 1);

function scroll() {
    y = window.scrollY;
    ty = y;
    if (scrollAmount() < 0.2) {
        var text = "taipingu".substr(0, Math.round(scrollAmount() / 0.2 * 8));
        document.querySelector("#pagetitle").innerHTML = text + caret;
    } else if (scrollAmount() < 0.4) {
        var text = "タイピング" + "shuu".substr(0, Math.round((scrollAmount() - 0.2) / 0.2 * 8));
        document.querySelector("#pagetitle").innerHTML = text + caret;
    } else if (scrollAmount() < 0.5) {
        document.querySelector("#pagetitle").innerHTML = "タイピング集" + caret;
    } else {
        document.querySelector("#pagetitle").innerHTML = "タイピング集";
    }
}

function scrollAmount() {
    var documentHeight = document.documentElement.scrollHeight;
    var viweHeight = document.documentElement.clientHeight;
    var scrollHeight = documentHeight - viweHeight;
    return y / scrollHeight;
}
