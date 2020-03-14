    let buttonDigits = [];
    
    var inputScreen = document.getElementById("screen-input");
    var storedVal;
    // get number digits
    for (let i = 0; i < 10; i++) {
        buttonDigits[i] = document.getElementById("btn-" + i);
        buttonDigits[i].addEventListener("click", () => {
            inputScreen.value += i;
        });
    }

    // GET remaining buttons
    let buttonMC = document.getElementById("btn-MC");
    let buttonMS = document.getElementById("btn-MS");
    let buttonMR = document.getElementById("btn-MR");
    let buttonMplus = document.getElementById("btn-M+");
    let buttonReciprocal = document.getElementById("btn-reciprocal");
    let buttonDecimal = document.getElementById("btn-decimal");
    let buttonxTwo = document.getElementById("btn-xTwo");
    let buttonSquareRoot = document.getElementById("btn-squareRoot");
    let buttonClear = document.getElementById("btn-C");
    let buttonPlus = document.getElementById("btn-plus");
    let buttonMinus = document.getElementById("btn-minus");
    let buttonMultiply = document.getElementById("btn-x");
    let buttonEqual = document.getElementById("btn-equals");
    let buttonDivide = document.getElementById("btn-divide");
    let buttonPlusMinus = document.getElementById("btn-plusMinus");

    // ADD Event listeners
    buttonPlus.addEventListener("click", () => {
        inputScreen.value += "+";
    });
    buttonMinus.addEventListener("click", () => {
        inputScreen.value += "-";
    });
    buttonDivide.addEventListener("click", () => {
        inputScreen.value += "/";
    });
    buttonMultiply.addEventListener("click", () => {
        inputScreen.value += "*";
    });
    buttonEqual.addEventListener("click", () => {
        inputScreen.value = eval(inputScreen.value);
    });
    buttonDecimal.addEventListener("click", () => {
        inputScreen.value += ".0";
    });
    buttonReciprocal.addEventListener("click", () => {
        let temp = eval(inputScreen.value);
        let tempTwo = "1/" + temp;
        inputScreen.value = eval(tempTwo);
    });
    buttonxTwo.addEventListener("click", () => {
        let temp = eval(inputScreen.value);
        let tempTwo = temp + "*" + "temp";
        inputScreen.value = eval(tempTwo);
    });
    buttonClear.addEventListener("click", () => {
        inputScreen.value = "";
    });
    buttonSquareRoot.addEventListener("click", () => {
        let temp = eval(inputScreen.value);
        inputScreen.value = eval(Math.sqrt(temp));
    });
    buttonPlusMinus.addEventListener("click", () => {
        let temp = eval(-1 * inputScreen.value);
        inputScreen.value = eval(temp);
    });
    buttonMC.addEventListener("click", () => {
        storedVal = 0;
    });
    buttonMS.addEventListener("click", () => {
        storedVal = eval(inputScreen.value);
    });
    buttonMR.addEventListener("click", () => {
        inputScreen.value = storedVal;
    });
    buttonMplus.addEventListener("click", () => {
        storedVal += eval(inputScreen.value);
    });