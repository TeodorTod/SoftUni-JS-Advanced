function addItem() {
    let items = document.getElementById('items');
    let newLiElement = document.createElement('ul li');
    let text = document.getElementById('newItemText');
    newLiElement.textContent = text.value;
    items.appendChild(newLiElement);
}