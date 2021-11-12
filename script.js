window.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById("vvod").addEventListener("click", calc);
});
function calc() {
    let col, cen;
    col = document.getElementById('colich').value;
    cen = document.getElementById('cen').value;
    col = parseInt(col);
    cen = parseInt(cen);
    if (!(Number.isInteger(col) && Number.isInteger(cen)) || cen < 0 || col < 0) {
        alert("Error!!!");
        document.getElementById('sum').innerHTML = `Итог: Error`
    } else {
        var sum = cen * col;
        document.getElementById('sum').innerHTML = `Итог: ${sum} руб.`;
    }

}
