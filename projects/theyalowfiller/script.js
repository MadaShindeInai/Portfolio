
document.querySelector('.desktop').addEventListener('click', function(){
  document.querySelector('.desktop').classList.add('d-none');
  document.querySelector('.mobi').classList.add('d-block');
  
  document.querySelector('.container').classList.add('deskview');
  document.querySelector('.frame').classList.add('deskview');
});

document.querySelector('.mobi').addEventListener('click', function(){
  document.querySelector('.desktop').classList.remove('d-none');
  document.querySelector('.mobi').classList.remove('d-block');
  
  document.querySelector('.container').classList.remove('deskview');
  document.querySelector('.frame').classList.remove('deskview');
});
document.querySelector('.back').addEventListener('click', function(){
  window.history.back();
});