window.setTimeout(function () {
  alert('HAMMERTIME');
}, 5000);

function hammertime(time){
  window.setTimeout( () => alert(`${time} is hammertime!`), time);
}

hammertime(5000);
