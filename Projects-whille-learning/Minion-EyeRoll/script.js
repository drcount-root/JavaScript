'use strict';

let eyeBalls = document.querySelectorAll('.eye-ball');
document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + '%';
  let y = (event.clientY * 70) / window.innerWidth + '%';

  for (let i = 0; i < eyeBalls.length; i++) {
    eyeBalls[i].style.left = x / 2;
    eyeBalls[i].style.top = y / 2;
    eyeBalls[i].style.transform = 'translate(' + x + ',' + y + ')';
  }
};
