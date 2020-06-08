function insert(num) {
    document.calc.textview.value = document.calc.textview.value + num
}

function equal() {
    var exp = document.calc.textview.value;
    if (exp) {
        document.calc.textview.value = eval(exp)
    }
}

function clean() {
    document.calc.textview.value = "";
}

function backspace() {
    var exp = document.calc.textview.value;
    document.calc.textview.value = exp.substring(0, exp.length - 1);
}