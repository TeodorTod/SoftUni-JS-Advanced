window.addEventListener('load', solve);

function solve() {
    let modelEl = document.getElementById('model');
    let yearEl = document.getElementById('year');
    let decriptionEl = document.getElementById('description');
    let priceEl = document.getElementById('price');
    let btnEl = document.getElementById('add');
    let totalPriceEl = document.getElementsByClassName('total-price')[0];

    let furnitureListEl = document.getElementById('furniture-list');


    btnEl.addEventListener('click', onclick);
    console.log(totalPriceEl);

    function onclick(ev) {
        ev.preventDefault();
        if (modelEl.value !== '' && yearEl.value > 0 && decriptionEl.value !== '' && priceEl.value > 0) {
            let trEl = document.createElement('tr');
            let hideTrEl = document.createElement('tr');
            let btnTdEl = document.createElement('td');
            let moreInfoBtn = document.createElement('button');
            let buyBtn = document.createElement('button');
            let tdYear = document.createElement('td');
            let tdDescription = document.createElement('td');

            moreInfoBtn.className = 'moreBtn';
            moreInfoBtn.textContent = 'More Info';
            buyBtn.className = 'buyBtn';
            buyBtn.textContent = 'Buy it';
            tdYear.textContent = `Year: ${yearEl.value}`;
            tdDescription.colSpan = '3';
            tdDescription.textContent = `Description: ${decriptionEl.value}`;

            trEl.className = 'info';
            hideTrEl.className = 'hide';
            hideTrEl.style.display = 'none';
            let typeEl = document.createElement('td');
            let tdPriceEl = document.createElement('td');
            typeEl.innerText = modelEl.value;
            tdPriceEl.innerText = priceEl.value;
            tdPriceEl.innerText = Number(tdPriceEl.innerText).toFixed(2);
            trEl.appendChild(typeEl);
            trEl.appendChild(tdPriceEl);
            trEl.appendChild(btnTdEl);
            btnTdEl.appendChild(moreInfoBtn);
            btnTdEl.appendChild(buyBtn);
            hideTrEl.appendChild(tdYear);
            hideTrEl.appendChild(tdDescription);
            furnitureListEl.appendChild(trEl);
            furnitureListEl.appendChild(hideTrEl);

            moreInfoBtn.addEventListener('click', moreBtnClick);
            function moreBtnClick(ev) {
                if (moreInfoBtn.textContent === 'More Info') {
                    moreInfoBtn.textContent = 'Less Info';
                    hideTrEl.style.display = 'contents';
                } else {
                    moreInfoBtn.textContent = 'More Info';
                    hideTrEl.style.display = 'none'; 
                }
               
            }

            buyBtn.addEventListener('click', buyFunc);
            function buyFunc(ev) {     
                trEl.remove();
                contentsRowElement.remove();
                totalPriceEl.textContent = Number(totalPriceEl.textContent) +  tdPriceEl.innerText;
            }
        }
        modelEl.value = '';
        yearEl.value = '';
        decriptionEl.value = '';
        priceEl.value = '';
    }

}