const emailInput = document.getElementById('email__input');
const inputDiv = document.querySelector('.mail__input');

emailInput.addEventListener('mouseover', () => {
    inputDiv.style.width = '30%';
});

emailInput.addEventListener('mouseout', () => {
    // თუ input ცარიელია, პატარავდება
    if(emailInput.value === '') {
        inputDiv.style.width = '25%';
    }
});
