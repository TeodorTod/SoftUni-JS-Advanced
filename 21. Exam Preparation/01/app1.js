function deleteByEmail() {
    let emailEl = document.querySelector('input[name = "email"]');
    let emailCellElements = document.querySelectorAll("tr td:nth-of-type(2)");
    let result = document.getElementById('result');

    let emailElements = Array.from(emailCellElements);
    let targetElement = emailElements.find((x) => x.textContent == emailEl.value);

    if (targetElement) {
        targetElement.parentNode.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}