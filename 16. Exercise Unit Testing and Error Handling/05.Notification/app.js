function notify(message) {
  let notificationEl = document.getElementById('notification');
  notificationEl.innerText = message;
  notificationEl.style.display = 'block';
  
  notificationEl.addEventListener('click', function() {
    notificationEl.style.display = 'none';
  })
;}