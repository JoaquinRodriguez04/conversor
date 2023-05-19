// variables
let value = document.getElementById("value");
let txtResult = document.getElementById("result");
let unidad1 = document.getElementById("unidad1");
let unidad2 = document.getElementById("unidad2");
let calculatedResult;

function convert(){
    number = value.value;
    number = parseFloat(number);

    if(value.value === ""){
        calculatedResult = " ";
        txtResult.innerHTML = `${calculatedResult}`;
        return;
    };

    // if(number === 0){
    //     calculatedResult = ".";
    //     txtResult.innerHTML = `${calculatedResult}`;
    // };
    
    // kilometros
    if(unidad1.value === "kilometro" && unidad2.value === "kilometro"){
        calculatedResult = number * 1;
        txtResult.innerHTML = `${calculatedResult} kilometro/s`;
    }
    if(unidad1.value === "kilometro" && unidad2.value === "metro"){
        calculatedResult = number * 1000;
        txtResult.innerHTML = `${calculatedResult} metro/s`;
    }
    if(unidad1.value === "kilometro" && unidad2.value === "centimetro"){
        calculatedResult = number * 10000;
        txtResult.innerHTML = `${calculatedResult} centimetro/s`;
    };

    // metros
    if(unidad1.value === "metro" && unidad2.value === "kilometro"){
        calculatedResult = number / 1;
        txtResult.innerHTML = `${calculatedResult} kilometro/s`;
    }
    if(unidad1.value === "metro" && unidad2.value === "metro"){
        calculatedResult = number * 1;
        txtResult.innerHTML = `${calculatedResult} metros/s`;
    }
    if(unidad1.value === "metro" && unidad2.value === "centimetro"){
        calculatedResult = number * 100;
        txtResult.innerHTML = `${calculatedResult} centimetros/s`;
    };

    // centimetros
    if(unidad1.value === "centimetro" && unidad2.value === "kilometro"){
        calculatedResult = number / 100000;
        txtResult.innerHTML = `${calculatedResult} kilometro/s`;
    }
    if(unidad1.value === "centimetro" && unidad2.value === "metro"){
        calculatedResult = number / 100;
        txtResult.innerHTML = `${calculatedResult} metros/s`;
    }
    if(unidad1.value === "centimetro" && unidad2.value === "centimetro"){
        calculatedResult = number * 1;
        txtResult.innerHTML = `${calculatedResult} centimetros/s`;
    };

}

// events
value.addEventListener("keyup",convert);
unidad1.addEventListener("change",convert);
unidad2.addEventListener("change",convert);