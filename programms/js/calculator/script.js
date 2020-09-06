var n1 = document.getElementById("n1").value;
var n2 = document.getElementById("n2").value;
function number(x) {
    n1 = parseInt(x);
}
function plus() {
    var x = number(n1);
    var y = number(n2);
    var result = x + y;
    document.getElementById("out").innerHTML = result;
}

function minus() {

}