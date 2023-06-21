const confirmScore = document.getElementById('confirm')
const scoreInput = document.querySelector('input')
const display = document.querySelector('.displayNumb')
const lycra = document.querySelectorAll('.lycra button')
const displayTotalEl = document.querySelector('.displayTotal')
const scoreDisplayEl = document.querySelector('.whiteDis')
// console.log(scoreDisplayEl)

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

// function waveToBeDisplayed(){
//  for (const [red, white, yellow, blue] of scoreDisplay){
//   console.log(red)
//  }
// }
// console.log(scoreDisplayEl)
//  for (const colors of scoreDisplayEl){
//   const [red, white, yellow, blue] = colors;
  
//  }



function submitScore(){
  console.log(typeof surfer, surfer)
  let score = scoreInput.value
  if(score){
    console.log('submitting score!')
    display.textContent = score
    console.log(`You entered ${score} for the Surfer in ${surfer}`)
    confirmScore.classList.add('active')
    const div = document.createElement('div')
    div.classList.add('waveScore')
    waveNum++
    div.innerHTML = `#${waveNum} Score: <br><span class="score">${score}</span>`
    // abaixo colocar no surfista certo
    scoreDisplayEl.appendChild(div)

    if(surfer === 'Red'){
      const redDis = document.querySelector('.redDis')
    redDis.appendChild(div)//needs to change
    }else if(surfer === 'White'){
      const whiteDis = document.querySelector('.whiteDis')
    whiteDis.appendChild(div)
    }else if(surfer === 'Yellow'){
      const yellowDis = document.querySelector('.yellowDis')
    yellowDis.appendChild(div)
    }else{
      const blueDis = document.querySelector('.blueDis')
    blueDis.appendChild(div)
    }


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
//scores will be displayed at colorDisplay alkjd

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
