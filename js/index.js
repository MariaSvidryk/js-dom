 const link = document.querySelector('a');

link.textContent = 'How to cook borshch';
link.href = 'https://www.youtube.com/watch?v=PiQolCL7MaA';

const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.textContent = 'We hope you enjoyed the ride.';


//[...Array(1000)].forEach( (_, i) => {
//    const p = document.createElement('p');
//    p.textContent = i + 'Hola';
//   sect.appendChild(p);  
//});

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

//linkPara.parentNode.removeChild(linkPara);

linkPara.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('formatted');

const clock = document.querySelector('.clock');
const options = {
    hour: "2-digit", minute: "2-digit",
    second: "2-digit"
};

const showClock = () => clock.innerText = (new Date()).toLocaleTimeString("uk", options);
setInterval(showClock, 1000);

$('.click-me').click ( () => $('img').toggle(3000) );

const display = document.querySelector('.display'); 

document.querySelectorAll('.digits button')
  .forEach( button => button.addEventListener('click', digitPressed));

  function digitPressed(ev) {
      display.value += ev.target.innerText;
  }

  document.querySelectorAll('.opers button')
  .forEach( button => button.addEventListener('click', digitPressed));

  function operPressed(ev) {
      display.value += ev.target.innerText;
  }

  document.querySelector('.eq').addEventListener('click', calculate);

  function calculate() {
      display.value = eval(display.value);
  }





 