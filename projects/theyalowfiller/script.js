
document.querySelector('.mobi').addEventListener('click', function(){
  document.querySelector('.desktop').classList.add('d-block');
  document.querySelector('.mobi').classList.add('d-none');
  
  document.querySelector('.container').classList.add('mobview');
  document.querySelector('.frame').classList.add('mobview');
});

document.querySelector('.desktop').addEventListener('click', function(){
  document.querySelector('.desktop').classList.remove('d-block');
  document.querySelector('.mobi').classList.remove('d-none');
  
  document.querySelector('.container').classList.remove('mobview');
  document.querySelector('.frame').classList.remove('mobview');
});
document.querySelector('.back').addEventListener('click', function(){
  window.history.back();
});