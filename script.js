//THEME CHANGING//

//Toggle Buttons//
const theme1button = document.querySelector('.theme1button');
const theme2button = document.querySelector('.theme2button');
const theme3button = document.querySelector('.theme3button');


//THEMES//

const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');

const toggletheme = document.querySelector('.toggle-container');

theme1button.addEventListener('click', function () {

  document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
  document.querySelector('nav').style.color = 'white';
  document.querySelector('.screen').style.color='white';
  document.querySelector('.screen').style.backgroundColor='hsl(224, 36%, 15%)';
  toggletheme.style.backgroundColor = 'hsl(223, 31%, 20%)';
  theme1button.style.backgroundColor = 'hsl(6, 63%, 50%)';
  theme2button.style.backgroundColor = 'inherit';
  theme3button.style.backgroundColor = 'inherit';
  theme1.style.display = 'block';
  theme2.style.display = 'none';
  theme3.style.display = 'none';
});

theme2button.addEventListener('click', function () {

  document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
  document.querySelector('nav').style.color = 'hsl(60, 10%, 19%)';
  document.querySelector('.screen').style.color='hsl(60, 10%, 19%)';
  document.querySelector('.screen').style.backgroundColor='hsl(0, 0%, 93%)';
  toggletheme.style.backgroundColor = 'hsl(0, 5%, 81%)';
  theme1button.style.backgroundColor = 'inherit';
  theme2button.style.backgroundColor = 'hsl(25, 98%, 40%)';
  theme3button.style.backgroundColor = 'inherit';
  theme1.style.display = 'none';
  theme2.style.display = 'block';
  theme3.style.display = 'none';
});

theme3button.addEventListener('click', function () {

  document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
  document.querySelector('nav').style.color = 'hsl(52, 100%, 62%)';
  document.querySelector('.screen').style.color='hsl(52, 100%, 62%)';
  document.querySelector('.screen').style.backgroundColor='hsl(268, 71%, 12%)';
  toggletheme.style.backgroundColor = 'hsl(268, 71%, 12%)';
  theme1button.style.backgroundColor = 'inherit';
  theme2button.style.backgroundColor = 'inherit';
  theme3button.style.backgroundColor = 'hsl(176, 100%, 44%)';
  theme1.style.display = 'none';
  theme2.style.display = 'none';
  theme3.style.display = 'block';
});

//Calculator Functionality

const display = document.querySelector('.screen');

function appendToDisplay(input){
  display.value += input;
};

function clearDisplay(){
  display.value = "";
};

function calculate(){

  try{
    display.value =eval(display.value);
  }
  catch(error){
    display.value ="Error";
  }
  
};

function removeFromDisplay(){
  if (!isNaN(display.value) || display.value.includes('+') || display.value.includes('-') || display.value.includes('/') || display.value.includes('x') || display.value.includes('.')){
  display.value = display.value.slice(0,-1);
}else if(isNaN(display.value)){
  display.value = "";
}};