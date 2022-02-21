window.addEventListener('load', solution);

function solution() {
  let fullNameEl = document.getElementById('fname');
  let emailEl = document.getElementById('email');
  let phoneEl = document.getElementById('phone');
  let adressEl = document.getElementById('address');
  let pCodeEl = document.getElementById('code');
  let submitBtnEl = document.getElementById('submitBTN');
  let infoPreviewEl = document.getElementById('infoPreview');
  let editBtnEl = document.getElementById('editBTN');
  let continueBtnEl = document.getElementById('continueBTN');
  let blockDivEl = document.getElementById('block');

  submitBtnEl.addEventListener('click', onclick);

  function onclick(ev) {
    ev.preventDefault();


    if (fullNameEl.value !== '' && emailEl.value !== '') {
      submitBtnEl.disabled = true;
      continueBtnEl.disabled = false;
      editBtnEl.disabled = false;

      let fullNameLi = document.createElement('li');
      let nameRec = fullNameEl.value;
      fullNameLi.textContent = `Full Name: ${fullNameEl.value}`;


      let emailElLi = document.createElement('li');
      let emailRec = emailEl.value;
      emailElLi.textContent = `Email: ${emailEl.value}`;

      let phoneElLi = document.createElement('li');
      let phoneRec = phoneEl.value;
      phoneElLi.textContent = `Phone Number: ${phoneEl.value}`;

      let adressElLi = document.createElement('li');
      let adresRec = adressEl.value;
      adressElLi.textContent = `Address: ${adressEl.value}`;

      let pCodeLi = document.createElement('li');
      let pCodeRec = pCodeEl.value;
      pCodeLi.textContent = `Postal Code: ${pCodeEl.value}`;

      infoPreviewEl.appendChild(fullNameLi);
      infoPreviewEl.appendChild(emailElLi);
      infoPreviewEl.appendChild(phoneElLi);
      infoPreviewEl.appendChild(adressElLi);
      infoPreviewEl.appendChild(pCodeLi);

      editBtnEl.addEventListener('click', edit);

      function edit(ev) {
        submitBtnEl.disabled = false;
        continueBtnEl.disabled = true;
        editBtnEl.disabled = true;

        fullNameEl.value = nameRec;
        emailEl.value = emailRec;
        phoneEl.value = phoneRec;
        adressEl.value = adresRec;
        pCodeEl.value = pCodeRec;

        infoPreviewEl.textContent = '';
      }

      continueBtnEl.addEventListener('click', continueB);

      function continueB(ev) {
        blockDivEl.textContent = '';
        let h3El = document.createElement('h3');
        h3El.innerText = 'Thank you for your reservation!';
        blockDivEl.appendChild(h3El);
      }
      fullNameEl.value = '';
      emailEl.value = '';
      phoneEl.value = '';
      adressEl.value = '';
      pCodeEl.value = '';

    }
  }
}