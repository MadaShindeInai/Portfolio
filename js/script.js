const classAddRemove = () => {
  dropdownElem.classList.toggle('d-flex');
  dropdownBtn.classList.toggle('transform-none');
}

dropdownBtn.addEventListener('click', classAddRemove );


// carousellllll

let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;

}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function(){
    this.classList.remove('active', direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}


function previousItem(n){
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n){
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.control-left').addEventListener('click', function(){
  
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.control-right').addEventListener('click', function(){
  
  if (isEnabled) {
    nextItem(currentItem);
  }
});

// SWIPERRRRRR

const swipeDetect = (el) => {
  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;

  let startTime = 0;
  let epalcedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 300;

  surface.addEventListener('mousedown', function(e) {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  }, );

  surface.addEventListener('mouseup', function(e) {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
  
    if (elapsedTime <= allowedTime){
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint ){
        if (distX > 0) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
            if (isEnabled) {
              nextItem(currentItem);
            }
        }
      }
    }
    if(event.target.getAttribute('id') === 'repairlink' ||
    event.target.getAttribute('id') === 'allowlink' ) {
      if (distX === 0) {
        let link = event.target.getAttribute('id') === 'repairlink' ? './projects/repairdesignfiller/index.html' : './projects/theyalowfiller/index.html';
        document.location.href = link;
      }
    }
    if(event.target.getAttribute('id') === 'showbutton1' ||
    event.target.getAttribute('id') === 'showbutton2' ) {
      if (distX === 0) {
        if (event.target.getAttribute('id') === 'showbutton1'){
          firstDesc.classList.toggle('d-block');
        } else if (event.target.getAttribute('id') === 'showbutton2'){
          secondDesc.classList.toggle('d-block');
        }
      }
    }

    e.preventDefault();
  },);

  surface.addEventListener('touchstart', function(e) {
    if (e.target.classList.contains('control-left') || e.target.classList.contains('control-right') ||
    e.target.classList.contains('arrow-left') || e.target.classList.contains('arrow-right')) {
      if (e.target.classList.contains('control-left') ||
      e.target.classList.contains('arrow-left')) {
        if (isEnabled) {
          previousItem(currentItem);
        }
      } else if (e.target.classList.contains('control-right') ||
      e.target.classList.contains('arrow-right')) {
        if (isEnabled) {
          nextItem(currentItem);
        }
      }
    }

    var touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  },);

  surface.addEventListener('touchmove', function(e) {
    e.preventDefault();
  },);

  surface.addEventListener('touchend', function(e) {
    var touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
  
    if (elapsedTime <= allowedTime){
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint ){
        if (distX > 0) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
            if (isEnabled) {
              nextItem(currentItem);
            }
        }
      }
    }
//fixing work of links

    if(event.target.getAttribute('id') === 'repairlink' ||
    event.target.getAttribute('id') === 'allowlink' ) {
      if (distX === 0) {
        let link = event.target.getAttribute('id') === 'repairlink' ? './projects/repairdesignfiller/index.html' : './projects/theyalowfiller/index.html';
        document.location.href = link;
      }
    }
    if(event.target.getAttribute('id') === 'showbutton1' ||
    event.target.getAttribute('id') === 'showbutton2' ) {
      if (distX === 0) {
        if (event.target.getAttribute('id') === 'showbutton1'){
          firstDesc.classList.toggle('d-block');
        } else if (event.target.getAttribute('id') === 'showbutton2'){
          secondDesc.classList.toggle('d-block');
        }
      }
    }

    e.preventDefault();
  },);
  
}
var el = document.querySelector('.carousel');
swipeDetect(el);
// swiper end

//toggle description
document.querySelector('.show-desk-repair').addEventListener('click', function(){
  firstDesc.classList.toggle('d-block');
  
}); 
document.querySelector('.show-desk-alow').addEventListener('click', function(){
  secondDesc.classList.toggle('d-block');
  
}); 