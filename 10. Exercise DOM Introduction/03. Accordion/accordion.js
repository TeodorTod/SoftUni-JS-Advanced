function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let text = document.querySelector('#extra');
    
    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        text.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        text.style.display = 'none';
    }
    
}