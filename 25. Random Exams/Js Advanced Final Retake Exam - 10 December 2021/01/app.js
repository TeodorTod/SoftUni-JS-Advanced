window.addEventListener('load', solve);

function solve() {
    let descriptionEl = document.getElementById('description');
    let nameEl = document.getElementById('client-name');
    let phoneEl = document.getElementById('client-phone');
    let submitBtn = document.querySelector('button');
    let typeProductEl = document.getElementById('type-product');
    let receiveOrdersEl = document.getElementById('received-orders');
    let completeOrdersEl = document.getElementById('completed-orders');
    let clearBtn = document.getElementsByClassName('clear-btn')[0];

    submitBtn.addEventListener('click', onClick);

    function onClick(ev) {
        ev.preventDefault();
        if (descriptionEl.value !== '' && nameEl.value !== '' && phoneEl.value !== '') {
            let divContainer = document.createElement('div');
            divContainer.classList = 'container';

            let h2 = document.createElement('h2');
            h2.textContent = `Product type for repair: ${typeProductEl.value}`;

            let h3 = document.createElement('h3');
            h3.textContent = `Client information: ${nameEl.value}, ${phoneEl.value}`;

            let h4 = document.createElement('h4');
            h4.textContent = `Description of the problem: ${descriptionEl.value}`;

            let startBtn = document.createElement('button');
            startBtn.classList = 'start-btn';
            startBtn.textContent = 'Start repair';

            let finishBtn = document.createElement('button');
            finishBtn.classList = 'finish-btn';
            finishBtn.textContent = 'Finish repair';

            divContainer.appendChild(h2);
            divContainer.appendChild(h3);
            divContainer.appendChild(h4);
            divContainer.appendChild(startBtn);
            divContainer.appendChild(finishBtn);
            receiveOrdersEl.appendChild(divContainer);

            descriptionEl.value = '';
            nameEl.value = '';
            phoneEl.value = '';

            finishBtn.disabled = true;

            startBtn.addEventListener('click', start);
            finishBtn.addEventListener('click', finish);
            clearBtn.addEventListener('click', clear);

            function start(ev) {
                startBtn.disabled = true;
                finishBtn.disabled = false;
            }

            function finish(ev) {
                let divClass = document.createElement('div');
                divClass.classList = 'container';
                divClass.innerHTML = divContainer.innerHTML;
                completeOrdersEl.appendChild(divClass);
                let start = document.querySelector('#completed-orders div .start-btn');
                let finish = document.querySelector('#completed-orders div .finish-btn');
                divClass.removeChild(start);
                divClass.removeChild(finish);
                receiveOrdersEl.removeChild(divContainer);
            }

            function clear(ev) {
                let divContainerElements = document.getElementsByClassName('container');
                while (divContainerElements[0]) {
                    //elements[0].parentNode.removeChild(elements[0])
                    divContainerElements[0].parentNode.removeChild(divContainerElements[0]);
                }
            }

        }
    }
}