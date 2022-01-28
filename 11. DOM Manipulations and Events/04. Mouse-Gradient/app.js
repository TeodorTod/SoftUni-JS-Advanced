function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gradientMouseoverHandler = (e) => {
        let persent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
        resultElement.textContent = `${persent}%`;
    };

    gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
}