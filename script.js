var brightness = 100
var contrast = 100
var inversion = 0
var grayscale = 0
var edit;
var isFlipped = false
let currentRotation = 0;
localStorage.setItem("brightness", brightness)
localStorage.setItem("contrast", contrast)
localStorage.setItem("inversion", inversion)
localStorage.setItem("grayscale", grayscale)
function reset() {
    location.reload()
}
function filter(name) {
    if (name == 'brightness') {
        document.getElementById("range").setAttribute("min", 0)
        document.getElementById("range").setAttribute("max", 200)
        document.getElementById("range").value = localStorage.getItem("brightness")
        changeVal(name)
    }
    else if (name == "contrast") {
        document.getElementById("range").setAttribute("min", 0)
        document.getElementById("range").setAttribute("max", 200)
        document.getElementById("range").value = localStorage.getItem("contrast")
        changeVal(name)
    }
    else if (name == 'inversion') {
        document.getElementById("range").setAttribute("min", 0)
        document.getElementById("range").setAttribute("max", 100)
        document.getElementById("range").value = localStorage.getItem("inversion")
        changeVal(name)
    } else if (name == "grayscale") {
        document.getElementById("range").setAttribute("min", 0)
        document.getElementById("range").setAttribute("max", 100)
        document.getElementById("range").value = localStorage.getItem("grayscale")
        changeVal(name)
    }
}
function changeVal(filter) {
    edit = filter || edit
    if (edit != undefined || edit != "") {
        localStorage.setItem(edit, document.getElementById("range").value)
    }
    document.getElementById("img").style.filter = `brightness(${localStorage.getItem("brightness")}%) contrast(${localStorage.getItem("contrast")}%) invert(${localStorage.getItem("inversion")}%) grayscale(${localStorage.getItem("grayscale")}%)`
    document.getElementById("perc").innerText = document.getElementById("range").value + "%"
}
function newImg() {
    var input = document.getElementById("image");
    var img = document.getElementById("img");
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);

    localStorage.setItem("brightness", 100)
    localStorage.setItem("contrast", 100)
    localStorage.setItem("inversion", 0)
    localStorage.setItem("grayscale", 0)
    filter('brightness')
}

function flipX(){
    if(!isFlipped){
        document.getElementById('img').style.transform = 'scaleX(-1)'
        isFlipped = true
    }else{
        document.getElementById('img').style.transform = 'scaleX(1)'
        isFlipped = false
    }
}
function rotate(rotation) {
    currentRotation += rotation;
    document.getElementById("img").style.transform = `rotate(${currentRotation}deg)`;
}


filter('brightness') 