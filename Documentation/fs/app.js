debugger;
function doMath(a) {
    let num1 = a;
    return (b) => {
        let num2 = b;
        return (callback) => {
            callback(num1, num2);
        }
    }
}

doMath(7)(8)((a, b) => { return a * b });

