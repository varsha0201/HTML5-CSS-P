setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds()/60
    const minutesRatio =(secondRatio + currentDate.getHours())/12
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}