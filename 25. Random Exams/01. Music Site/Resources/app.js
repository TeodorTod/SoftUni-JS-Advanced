window.addEventListener('load', solve);

function solve() {
    let genreEl = document.getElementById('genre');
    let nameEl = document.getElementById('name');
    let autorEl = document.getElementById('author');
    let dateEl = document.getElementById('date');
    let submitBtnEl = document.getElementById('add-btn');
    let allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
    let saveHitsContainer = document.getElementsByClassName('saved-container')[0];
    let totalLikesPEl = document.querySelector('.likes p'); 

    submitBtnEl.addEventListener('click', onclick);

    function onclick(ev) {
        ev.preventDefault();

        if (genreEl.value !== '' && nameEl.value !== 0 && autorEl.value !== '' && dateEl.value !== 0) {
            let newDiv = document.createElement('div');
            newDiv.className = 'hits-info';

            let img = document.createElement('img');
            img.src = './static/img/img.png';

            let genre = document.createElement('h2');
            genre.textContent = `Genre: ${genreEl.value}`;

            let name = document.createElement('h2');
            name.textContent = `Name: ${nameEl.value}`;

            let autor = document.createElement('h2');
            autor.textContent = `Autor: ${autor.value}`;

            let date = document.createElement('h3');
            date.textContent = `Date: ${genreEl.value}`;

            let saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save song';

            let likeBtn = document.createElement('button');
            likeBtn.className = 'like-btn';
            likeBtn.textContent = 'Like song';

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';

            newDiv.appendChild(img);
            newDiv.appendChild(genre);
            newDiv.appendChild(name);
            newDiv.appendChild(autor);
            newDiv.appendChild(date);
            newDiv.appendChild(saveBtn);
            newDiv.appendChild(likeBtn);
            newDiv.appendChild(deleteBtn);
            allHitsContainer.appendChild(newDiv);

            saveBtn.addEventListener('click', saveClick);
            likeBtn.addEventListener('click', likeClick);
            deleteBtn.addEventListener('click', deleteClick);

            function saveClick(ev) {
                let currTarget = ev.target;
                let currTargetTextContent = ev.target.textContent;
                saveHitsContainer.appendChild(currTarget.parentNode);
                currTarget.parentNode.children[6].remove();
                currTarget.parentNode.children[5].remove();
                

            }

            function likeClick(ev) {
                let [likes, num] = totalLikesPEl.textContent.split(': ');
                num = Number(num);
                num++;
                totalLikesPEl.textContent = `Total likes: ${num}`;
                likeBtn.disabled = true;
            }

            function deleteClick(ev) {
                let currTarget = ev.target;
                
                currTarget.parentNode.remove();
            }

        }
    }
}