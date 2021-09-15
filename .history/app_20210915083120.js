function display(val) {
    document.getElementById("textval").value+=val
}

function equals() {
    let x = document.getElementById("textval").value
    let y = eval(x)
    y =  document.getElementById('textval').value
}

function clr() {
    document.getElementById('textval').value = ""
}