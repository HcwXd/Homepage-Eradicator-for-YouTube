const intId = setInterval(() => {
  if (document.querySelector('#primary')) {
    document.querySelector('#primary').style.display = 'none';
    clearInterval(intId);
  }
}, 100);
