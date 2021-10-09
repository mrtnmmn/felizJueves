let date = new Date()

let jueves = date.getDay();

let faltan = 4 - jueves
if (faltan < 0 ) {
    faltan += 7
}

if (jueves === 4) {
    document.getElementById('body').className = 'bgAsuka'
    document.getElementById("main").innerHTML = '<p>Feliz Jueves :)</p>'
} else {
    document.getElementById("body").className = 'bgShinji'
    document.getElementById("main").innerHTML = '<p>Faltan ' + faltan + ' dias para ser jueves</p>'
}