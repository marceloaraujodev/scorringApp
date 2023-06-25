const confirmScore = document.getElementById('confirm')
const scoreInput = document.querySelector('input')
const display = document.querySelector('.displayNumb')
const lycra = document.querySelectorAll('.lycra button')
const displayTotalEl = document.querySelector('.displayTotal')
const redDis = document.querySelector('.redDis')
const whiteDis = document.querySelector('.whiteDis')
const blueDis = document.querySelector('.blueDis')
const yellowDis = document.querySelector('.yellowDis')
const newHeatBtn = document.querySelector('.newHeat')


// console.log(redDis)

let surfer;
let waveNum = 0;


// // the jersey array on surfer. listen to the dom to store the info in the surfer object 

const data = {
  // jerseys: ['red', 'white', 'yellow', 'blue'],
  score: {
    red: [],
    white: [],
    yellow: [],
    blue: []
   }
}
// console.log(data)



                    ////   ACCESSING THE SCORES

// // this gets the waves scores. wave #1 = indexOf(red[0]) index and wave score = red[0]
// // data.score.red.push(5)
// // data.score.red.push(8)
// // console.log(data.score.red.indexOf(data.score.red[1]),'index = WaveNum') // #WaveNum 0 = wave#1
// // console.log(data.score.red[0]) // Score value


// // Jersey individual color
// const jerseys = data.jerseys


// // accessing individual scores
// // console.log(data.score.red) // scores for jersey


  // need to receive the jersey color from the lycraforeach event but how?
//   let jerseyScores = data.score[dataJersey] // Can use this dinamically to change just the color of the scores data.score.[blue] Get the color from lycra!
//   for (let waveScore = 0; waveScore < jerseyScores.length; waveScore++){
//     // waveScore = index = waveNum
//     // redScores[waveScore] = Score value
//     // console.log(waveScore)
//     // console.log(redScores[waveScore])

//     console.log(`#${waveScore + 1} Score: ${jerseyScores[waveScore]}`)
// }


// TODO 


//  Create a new heat button. Clean all the scores.
//  Find a way to count the heats for future reference.
//  When a new heat start store the last scores either in a {} or []




//// New Heat
// // waves dont exist in the dom, delete them by the class
newHeatBtn.addEventListener('click', ()=>{
  for(const color in data.score){
    const scores = data.score[color]
    scores.length = 0;
    console.log(document.querySelectorAll('.waveScore'))
    document.querySelectorAll('.waveScore').forEach((wave)=>{
      wave.remove()
    })
  }

  
})


//// creates div elem to be displayed in the score
function createScoreDiv(){
  const div = document.createElement('div')
  div.classList.add('waveScore')
  return div
}


function getScores(){
  // // loop through the score 
  for(const color in data.score){
  const scores = data.score[color]

  //// Displays all the waves inside the data.score and displays in the waves panel
  //// loop through the scores of each color, access to index = wavesNum
  for(let i = 0; i < scores.length; i++){
      let wave = i + 1
      // console.log(scores[i])
      // console.log(`#${wave} Score: ${scores[i]}`)
      const div = createScoreDiv()
      // console.log(div)
      if(color === 'red'){
          div.innerHTML = `#${wave} Score: <br><span class="score">${scores[i]}</span>`
          redDis.appendChild(div) 
      }
      if(color === 'white'){
          div.innerHTML = `#${wave} Score: <br><span class="score">${scores[i]}</span>`
          whiteDis.appendChild(div) 
      }
      if(color === 'yellow'){
          div.innerHTML = `#${wave} Score: <br><span class="score">${scores[i]}</span>`
          yellowDis.appendChild(div) 
      }
      if(color === 'blue'){
          div.innerHTML = `#${wave} Score: <br><span class="score">${scores[i]}</span>`
          blueDis.appendChild(div) 
      }
  }
  }
}
getScores()


//// display score in the display box
scoreInput.addEventListener('keydown', (e)=>{
  // console.log(e.key)
  // display.textContent = scoreInput.value;
  if(e.key === 'Backspace'){
    display.textContent = display.textContent.slice(0, -1)
  }else{
    let input = e.key
    if(!isNaN(input) || input === '.'){
      display.textContent += input
    }else{
      alert('enter number')
    }
  }
  
})


// after clicking checks if judge has picked surfers jersey
confirmScore.addEventListener('click', ()=>{
  surfer ? submitScore() : alert('pick surfer')
})




function submitScore(){


    // after that if statment I have to loop through the array of scores see how many waves for each color, display them in the colors that match them. and only look for the number of waves in the data score array

  // console.log(typeof surfer, surfer)
  let score = Number(scoreInput.value)
  console.log(score > 0 && score <= 10 ? 'valid score' : 'not a valid score')
  if(score > 0 && score <= 10){
    console.log('submitting score!')
    display.textContent = score
    console.log(`You entered ${score} for the Surfer in ${surfer}`)
    confirmScore.classList.add('active')
    const div = createScoreDiv()
    waveNum = data.score[surfer.toLowerCase()].length + 1 // reads the amount of waves on data
    div.innerHTML = `#${waveNum} Score: <br><span class="score">${score}</span>`


    if(surfer === 'Red'){
    redDis.appendChild(div) 
    data.score.red.push(score) //this will send the score to the array
    }else if(surfer === 'White'){
    whiteDis.appendChild(div)
    data.score.white.push(score) //this will send the score to the array
    }else if(surfer === 'Yellow'){
    yellowDis.appendChild(div)
    data.score.yellow.push(score) //this will send the score to the array
    }else{ 
    blueDis.appendChild(div)
    data.score.blue.push(score) //this will send the score to the array
    }

    scoreInput.value = ''
    // display.textContent = 0;
    setTimeout(() => {
      clear()
      display.textContent = '';
    }, 1000);
  }else{
    alert('Please enter a score from 0.1 through 10')
    display.textContent = '';
    scoreInput.value = ''
  }


  console.log(data)
  // getScores()
}


//// clears the picked color
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
    // colorWaveNum(surfer.toLocaleLowerCase())

    //repeat the forEach but just to remove the class, then add for the item that is clicked again.
    lycra.forEach((otherItem)=>{
      otherItem.classList.remove('active')
    });
    item.classList.add('active')
  })
})


