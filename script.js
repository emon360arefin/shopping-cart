function numberUpdate(isIncrease, item) {
    let number = document.querySelector(item)
    let numberValue = number.value;
    let numberValueInt = parseInt(numberValue);
    if (isIncrease) {
        number.value = numberValueInt + 1;
    } else {
        if (number.value > 1) {
            number.value = numberValueInt - 1;
        }
    }
    return quantity = number.value;
}

document.querySelector('.phone-btn-plus').addEventListener('mousedown', function () {  
    newNumber = numberUpdate(true,'#phone-number')

    let phonePrice = document.querySelector('.phone-price');
    phonePrice.innerHTML = newNumber * 1200;
})

document.querySelector('.phone-btn-minus').addEventListener('click', function () {   
    newNumber = numberUpdate(false, '#phone-number');

    let phonePrice = document.querySelector('.phone-price');
    phonePrice.innerHTML = newNumber * 1200;
})

document.querySelector('.case-btn-plus').addEventListener('mousedown', function () {  
    newNumber = numberUpdate(true,'#case-number')

    let casePrice = document.querySelector('.case-price');
    casePrice.innerHTML = newNumber * 59;
})

document.querySelector('.case-btn-minus').addEventListener('click', function () {   
    newNumber = numberUpdate(false, '#case-number');

    let casePrice = document.querySelector('.case-price');
    casePrice.innerHTML = newNumber * 59;
})

document.querySelector('.ex-btn-plus').addEventListener('mousedown', function () {  
    newNumber = numberUpdate(true,'#ex-number')

    let exPrice = document.querySelector('.ex-price');
    exPrice.innerHTML = newNumber * 799;
})

document.querySelector('.ex-btn-minus').addEventListener('click', function () {   
    newNumber = numberUpdate(false, '#ex-number');

    let exPrice = document.querySelector('.ex-price');
    exPrice.innerHTML = newNumber * 799;
})







