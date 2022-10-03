const lamp = document.querySelector('#lamp')
const turnOn = document.querySelector('#turnOn')
const turnOff = document.querySelector('#turnOff')
const check = document.querySelector('#check')
const fixLamp = document.querySelector('.fixLamp')
const backg = document.body

// lamp.addEventListener('mouseover', lampOn)
// lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
fixLamp.addEventListener('click', refresh)
check.addEventListener('change', fix)

function lampOn(){
  if (!isLampBroken()) 
  lamp.src = './img/Llig.jpg'
  backg.classList.add('on')
}

function lampOff(){
  if (!isLampBroken())
  lamp.src = './img/Ldesl.jpg'
  backg.classList.remove('on')
}
  
function lampBroken(){
  if (!isLampBroken())
  lamp.src = './img/Lbrok.jpg'
  lampOff()
}

function isLampBroken(){
return lamp.src.indexOf ( 'Lbrok' ) > -1
}

function fix(){
  if (!isLampBroken())
  if (check.checked){
    lampOn()
  }else {
    lampOff()
  }
}

function refresh(){
  location.reload();
}
