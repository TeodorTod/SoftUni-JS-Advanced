function solve(){
   let autorEl = document.getElementById('creator');
   let titleEl = document.getElementById('title');
   let categoryEl = document.getElementById('category');
   let contentEl = document.getElementById('content');
   let createBtnEl = document.getElementsByClassName('btn create')[0];
   let inputSectionEl = document.querySelector('.site-content main section');
   let archiveOlEl = document.querySelector('.archive-section ol');
   
   createBtnEl.addEventListener('click', onClick);

   function onClick(ev) {
      ev.preventDefault();

      let article = document.createElement('article');
      let title = document.createElement('h1');
      title.textContent = titleEl.value;

      let categoryP = document.createElement('p');
      let typeCat = document.createElement('strong');
      typeCat.textContent = categoryEl.value;
      categoryP.textContent = 'Category: ';
      categoryP.appendChild(typeCat);

      let autorP = document.createElement('p');
      let typeAutor = document.createElement('strong');
      typeAutor.textContent = autorEl.value;
      autorP.textContent = 'Creator:';
      autorP.appendChild(typeAutor);

      let content = document.createElement('p');
      content.textContent = contentEl.value;

      let divButtons = document.createElement('div');
      divButtons.classList = 'buttons';

      let deleteBtn = document.createElement('button');
      deleteBtn.classList = 'btn delete';
      deleteBtn.textContent = 'Delete';
      divButtons.appendChild(deleteBtn);

      let archiveBtn = document.createElement('button');
      archiveBtn.classList = 'btn archive';
      archiveBtn.textContent = 'Archive';
      divButtons.appendChild(archiveBtn);
      

      article.appendChild(title);
      article.appendChild(categoryP);
      article.appendChild(autorP);
      article.appendChild(content);
      article.appendChild(divButtons);
      inputSectionEl.appendChild(article);

      autorEl.value = '';
      titleEl.value = '';
      categoryEl.value = '';
      contentEl.value = '';

      deleteBtn.addEventListener('click', deleteFunction);
      archiveBtn.addEventListener('click', archiveFunction);

      function deleteFunction(ev) {
         document.querySelector("main section").removeChild(article);
      }

      function archiveFunction() {
         let ol = document.querySelector("ol");
         let li = document.createElement("li");
         li.textContent = title.textContent;
         ol.appendChild(li);
         let ordered = Array.from(document.querySelectorAll("li")).sort((a,b)=> a.textContent.localeCompare(b.textContent));
         ol.innerHTML = ordered.map(li => li.outerHTML).join('');
 
         document.querySelector("main section").removeChild(article);
      }

      
   }
   
  }
