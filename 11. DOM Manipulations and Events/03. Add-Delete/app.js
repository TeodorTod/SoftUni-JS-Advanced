function addItem() {
    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    
    let newLiElement = document.createElement('li');
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    newLiElement.textContent = inputElement.value;
    inputElement.value = '';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    newLiElement.appendChild(deleteElement);
    itemsElement.appendChild(newLiElement);
}
