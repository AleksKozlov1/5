function calc() {
    let col, cen;
    col = document.getElementById('colich').value;
    cen = document.getElementById('cen').value;
    col = parseInt(col);
    cen = parseInt(cen);
    if (!(Number.isInteger(col) && Number.isInteger(cen)) || cen < 0 || col < 0) {
        alert("Error!!!");
    } else {
        var sum = cen * col;
        document.getElementById('sum').innerHTML = "Итог: " + sum;
    }

}
