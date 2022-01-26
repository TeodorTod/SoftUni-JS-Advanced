function search() {
   let inputElement = document.getElementById('searchText').value;
   let citiesElement = Array.from(document.querySelectorAll('#towns li'));
   let matchElement = document.getElementById('result');
   let count = 0;

   for (let i = 0; i < citiesElement.length; i++) {

      if ((citiesElement[i].textContent).includes(inputElement) && inputElement !== '') {
         count++;
         citiesElement[i].style.fontWeight = 'bold';
         citiesElement[i].style.textDEcoration = 'underline';
      } else {
         citiesElement[i].style.fontWeight = 'normal';
         citiesElement[i].style.textDEcoration = 'none';
      }
   }
   matchElement.textContent = `${count} matches found`
}