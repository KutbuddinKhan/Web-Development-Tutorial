console.log("Function in JavaScript");

function minMax(a, b, c) {
    if (a > b) {
        if (a > c) {
            return `${a} is the greatest Number`;
        }
        else {
            return `${c} is the greatest Number`;
        }
    }
    if (b > a) {
        if (b > c) {
            return `${b} is the greatest Number`;
        }
        else {
            return `${c} is the greatest Number`;
        }
    }
    else {
        return `${c} is the greatest Number`;
    }
}
let a = 4;
let b = 21;
let c = 5;
console.log(minMax(a, b, c));