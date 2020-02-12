const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const multi1 = document.getElementById("multi1");
const multi2 = document.getElementById("multi2");


const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");

const mod1 = document.getElementById("mod1");
const mod2 = document.getElementById("mod2");

document.addEventListener("keyup", () => {
    event.preventDefault();

    let subResult = document.getElementById("sub-result");
    const minResult = parseFloat(sub1.value) - parseFloat(sub2.value)
    // console.log(typeof (sub1.value));
    subResult.value = minResult;
    // console.log(typeof (minResult));

    let divResult = document.getElementById("div-result")
    const divisionResult = parseFloat(div1.value) / parseFloat(div2.value);
    divResult.value = divisionResult

    let multiResult = document.getElementById("multi-result");
    const multipliResult = parseFloat(multi1.value) * parseFloat(multi2.value)
    multiResult.value = multipliResult

    let addResult = document.getElementById("add-result")
    const plusResult = parseFloat(add1.value) + parseFloat(add2.value)
    addResult.value = plusResult;

    let modResult = document.getElementById("mod-result");
    const moduloResult = parseFloat(mod1.value) % parseFloat(mod2.value);
    modResult.value = moduloResult;

})
