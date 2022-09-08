/**
 * Bài 1: In số nguyên tố
 */

var txtSoN = document.getElementById("txtSoN");
var btnInSo = document.getElementById("btnInSo");
var txtInSo = document.getElementById("txtInSo");

function soNguyenTo(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function soNguyenToNhoHonN(n) {
    var res = "";
    for (var i = 2; i <= n; i++) {
        if (soNguyenTo(i)) res += i + " ";
    }
    return res;
}

btnInSo.onclick = function () {
    var soN = Number(txtSoN.value);
    var res = soNguyenToNhoHonN(soN);
    txtInSo.value = res;
}