//creation div contenant
const container = document.createElement('div');
container.id = 'cont';

//creation ecran de calculatrice
const screen = document.createElement('div');
screen.id = 'screen';

//creation des boutons
const bouton1 = document.createElement('button');
bouton1.innerHTML = '(';

const bouton2 = document.createElement('button');
bouton2.innerHTML = ')'

const bouton3 = document.createElement('button');
bouton3.innerHTML = '%'

const bouton4 = document.createElement('button');
bouton4.innerHTML = 'AC'

const bouton5 = document.createElement('button');
bouton5.innerHTML = '7'

const bouton6 = document.createElement('button');
bouton6.innerHTML = '8'

const bouton7 = document.createElement('button');
bouton7.innerHTML = '9'

const bouton8 = document.createElement('button');
bouton8.innerHTML = '/'

const bouton9 = document.createElement('button');
bouton9.innerHTML = '4'

const bouton10 = document.createElement('button');
bouton10.innerHTML = '5'

const bouton11 = document.createElement('button');
bouton11.innerHTML = '6'

const bouton12 = document.createElement('button');
bouton12.innerHTML = 'x'

const bouton13 = document.createElement('button');
bouton13.innerHTML = '1'

const bouton14 = document.createElement('button');
bouton14.innerHTML = '2'

const bouton15 = document.createElement('button');
bouton15.innerHTML = '3'

const bouton16 = document.createElement('button');
bouton16.innerHTML = '-'

const bouton17 = document.createElement('button');
bouton17.innerHTML = '0'

const bouton18 = document.createElement('button');
bouton18.innerHTML = '.'

const bouton19 = document.createElement('button');
bouton19.innerHTML = '='

const bouton20 = document.createElement('button');
bouton20.innerHTML = '+'


container.append(screen,bouton1,bouton2,bouton3,bouton4,bouton5,bouton6,bouton7,bouton8,bouton9,bouton10,bouton11,bouton12,bouton13,bouton14,bouton15,bouton16,bouton17,bouton18,bouton19,bouton20)

document.body.appendChild(container)

let currentVal = '';

bouton1.addEventListener('click', () => {
    currentVal += '(';
    screen.innerText = currentVal;
});

bouton2.addEventListener('click', () => {
    currentVal += ')';
    screen.innerText = currentVal;
});
  
bouton3.addEventListener('click', () => {
    currentVal += '%';
    screen.innerText = currentVal;
});

bouton4.addEventListener('click', () => {
    currentVal = '';
    screen.innerText = '0';
  });

bouton5.addEventListener('click', () => {
    currentVal += '7';
    screen.innerText = currentVal;
});
  
bouton6.addEventListener('click', () => {
    currentVal += '8';
    screen.innerText = currentVal;
});

bouton7.addEventListener('click', () => {
    currentVal += '9';
    screen.innerText = currentVal;
});

bouton8.addEventListener('click', () => {
    currentVal += '/';
    screen.innerText = currentVal;
});

bouton9.addEventListener('click', () => {
    currentVal += '4';
    screen.innerText = currentVal;
});
  
bouton10.addEventListener('click', () => {
    currentVal += '5';
    screen.innerText = currentVal;
});

bouton11.addEventListener('click', () => {
    currentVal += '6';
    screen.innerText = currentVal;
});

bouton12.addEventListener('click', () => {
    currentVal += '*';
    screen.innerText = currentVal;
});

bouton13.addEventListener('click', () => {
    currentVal += '1';
    screen.innerText = currentVal;
});

bouton14.addEventListener('click', () => {
    currentVal += '2';
    screen.innerText = currentVal;
});

bouton15.addEventListener('click', () => {
    currentVal += '3';
    screen.innerText = currentVal;
});

bouton16.addEventListener('click', () => {
    currentVal += '-';
    screen.innerText = currentVal;
});

bouton17.addEventListener('click', () => {
    currentVal += '0';
    screen.innerText = currentVal;
});

bouton18.addEventListener('click', () => {
    currentVal += '.';
    screen.innerText = currentVal;
});

bouton19.addEventListener('click', () => {
    const result = eval(currentVal);
    screen.innerText = result;
    currentVal = result.toString();
});

bouton20.addEventListener('click', () => {
    currentVal += '+';
    screen.innerText = currentVal;
});
