const confirmScore = document.getElementById('confirm')
const scoreInput = document.querySelector('input')
const display = document.querySelector('.displayNumb')
const lycra = document.querySelectorAll('.lycra button')
const displayTotalEl = document.querySelector('.displayTotal')
// console.log(lycra)

let surfer;
let waveNum = 0;

//// listen for picked surffer
// lycra.forEach((item)=>{
//   item.addEventListener('click', ()=>{
//     surfer = item.textContent
//     console.log(`Surfer in ${surfer}`)

//     //repeat the for each but just to remove the class! 
//     lycra.forEach((otherItem)=>{
//       otherItem.classList.remove('active')
//     });
//     item.classList.add('active')
//   })
// })

// display score in the display box
scoreInput.addEventListener('keydown', (e)=>{
  // console.log(typeof e.key)
  let number = Number(e.key)
  if(number){
    display.textContent = number
  }else{
    alert('enter number')
  }
  
})

// after clicking checks if judge has picked surfers jersey
confirmScore.addEventListener('click', ()=>{
  surfer ? submitScore() : alert('pick surfer')
})

// submits the score
// find a way to count the waves for each surfer individually
// put the jersey waves into a array and count it from there
const wavesArr = [];

function submitScore(){
  let score = scoreInput.value
  if(score){
    console.log('submitting score!')
    display.textContent = score
    console.log(`You entered ${score} for the Surfer in ${surfer}`)
    confirmScore.classList.add('active')
    const div = document.createElement('div')
    div.classList.add('waveScore')
    waveNum++
    div.innerHTML = `#${waveNum} for <span class='surferJersey'>${surfer}</span> Score: <span class="score">${score}</span>`
    displayTotalEl.appendChild(div)
    wavesArr.push(surfer)
    scoreInput.value = ''
    display.textContent = 0;
    setTimeout(() => {
      clear()
    }, 1500);
  }else{
    alert('Please enter a score')
  }
  console.log(wavesArr)
}

//// 1. go to wavesArr check if surfer is there if it is. how many times.
//// 2. display the value of the how many times nex to the #
// function countSurfersWave(array, surfer){

// }

function clear(){
  // display.textContent = 0
  confirmScore.classList.remove('active')
  lycra.forEach((item)=>item.classList.remove('active'))
}

//// checks the buttons to add the class active
lycra.forEach((item)=>{
  item.addEventListener('click', ()=>{
    surfer = item.textContent
    console.log(`Surfer in ${surfer}`)

    //repeat the forEach but just to remove the class, then add for the item that is clicked again.
    lycra.forEach((otherItem)=>{
      otherItem.classList.remove('active')
    });
    item.classList.add('active')
  })
})
