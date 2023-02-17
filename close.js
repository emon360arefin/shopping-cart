
function hoverIn(closingItem,closingBtn) { 
    let itemBoxPhone = document.querySelector(closingItem);
    itemBoxPhone.classList.toggle('opacity-50');
    itemBoxPhone.style.transition = 'all .5s ease-in-out';

    let closeBtn = document.querySelector(closingBtn);
    closeBtn.style.color = 'red';
    closeBtn.style.transform = 'scale(1.2)';
    closeBtn.style.rotate = '180deg';
    closeBtn.style.transition = 'all .5s ease-in-out';
}

function mouseOver(closingItem,closingBtn) {
    document.querySelector(closingItem).addEventListener('mouseover', function() {
        hoverIn(closingBtn,closingItem);
    })
}

function hoverOut (closingItem,closingBtn) {
    let itemBoxPhone = document.querySelector(closingItem);
    itemBoxPhone.classList.toggle('opacity-50');
    
    let closeBtn = document.querySelector(closingBtn);
    closeBtn.style.color = 'rgb(53, 54, 55)';
    closeBtn.style.transform = 'scale(1)';
    closeBtn.style.rotate = '0deg';
}

function mouseOut(closingItem,closingBtn) {
    document.querySelector(closingItem).addEventListener('mouseout', function() {
        hoverOut(closingBtn,closingItem)
    })
}

function displayNone(closingBtn,closingItem) {
    let itemBoxPhone = document.querySelector(closingItem);
    let cross = document.querySelector(closingBtn);
    cross.style.display = 'none';
    itemBoxPhone.style.display = 'none';

}
function itemVanish(closingBtn,closingItem) {
    document.querySelector(closingBtn).addEventListener('click', function() {
        displayNone(closingBtn,closingItem);
        console.log("Hello");
        
    })
}

// Call Function For Different Items Here

mouseOver('#phone-item-close','.item-box-phone');
mouseOut('#phone-item-close','.item-box-phone');
itemVanish('#phone-item-close','.item-box-phone');

mouseOver('#case-item-close','.item-box-case');
mouseOut('#case-item-close','.item-box-case');
itemVanish('#case-item-close','.item-box-case');


mouseOver('#ex-item-close','.item-box-ex');
mouseOut('#ex-item-close','.item-box-ex');
itemVanish('#ex-item-close','.item-box-ex');
