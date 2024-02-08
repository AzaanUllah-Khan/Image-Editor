function reset(){
    location.reload()
}
function filter(name){
    if(name == 'brightness' || name == 'contrast'){
        document.getElementById("range").setAttribute("min",0)
        document.getElementById("range").setAttribute("max",200)
        document.getElementById("range").setAttribute("value",100)
        changeVal()
    }
    else if(name == 'inversion' || name == 'grayscale'){
        document.getElementById("range").setAttribute("min",0)
        document.getElementById("range").setAttribute("max",100)
        document.getElementById("range").setAttribute("value",0)
        changeVal()
    }
}
function changeVal(){
    document.getElementById("perc").innerText = document.getElementById("range").value + "%"
}