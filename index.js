/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const costumerVal = document.getElementById("costumer-value")
const lenghtCon = document.getElementById("lenght-con")
const volumeCon = document.getElementById("volume-con")
const massCon = document.getElementById("mass-con")
const conBtn = document.getElementById("convert-btn")

conBtn.addEventListener("click", function() {
    
    valNum = costumerVal.value
    let feetLenght = valNum * 3.281;
    let mtrLenght = valNum/ 3.281;
    lenghtCon.textContent = `${valNum} meters = ${feetLenght.toFixed(3)} feet | 
                             ${valNum} feet = ${mtrLenght.toFixed(3)} meters`
    
    
    let gallonVol = valNum * 0.264;
    let literVol = valNum/ 0.264;
    volumeCon.textContent = `${valNum} liters = ${gallonVol.toFixed(3)} gallons | 
                             ${valNum} gallons = ${literVol.toFixed(3)} liters`
                             
    let poundMass = valNum * 2.204;
    let kiloMass = valNum/ 2.204;
    massCon.textContent = `${valNum} kilograms = ${poundMass.toFixed(3)} pounds | 
                             ${valNum} gallons = ${kiloMass.toFixed(3)} liters`
    
})


costumerVal.addEventListener("click", function() {
    costumerVal.value = ""
})

