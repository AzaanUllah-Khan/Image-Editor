var brightness = 100
var contrast = 100
var inversion = 0
var grayscale = 0
var edit
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
    document.getElementById("perc").innerText = document.getElementById("range").value + "%"
}
filter('brightness')