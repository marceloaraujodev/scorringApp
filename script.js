const confirmScore = document.getElementById('confirm')
const scoreInput = document.querySelector('input')
const display = document.querySelector('.displayNumb')
const lycra = document.querySelectorAll('.lycra button')
const displayTotalEl = document.querySelector('.displayTotal')
const scoreDisplayEl = document.querySelector('.whiteDis')
// console.log(scoreInput)

// let surfer;
// let waveNum = 0;

// // the jersey array on surfer. listen to the dom to store the info in the surfer object 

// const surfer = {
//   jerseys: ['red', 'white', 'yellow', 'blue'],
//   score: {
//     red: [5, 6, 8],
//     white: [],
//     yellow: [],
//     blue: [],
//    }//,
//   // waveNumb: {
//   //   red: [],
//   //   white: [],
//   //   yellow: [],
//   //   blue: [],
//   // }
// }

// // this gets the waves scores. wave #1 = indexOf(red[0]) index and wave score = red[0]
// // surfer.score.red.push(5)
// // surfer.score.red.push(8)
// // console.log(surfer.score.red.indexOf(surfer.score.red[1]),'index = WaveNum') // #WaveNum 0 = wave#1
// // console.log(surfer.score.red[0]) // Score value


// // Jersey individual color
// const jerseys = surfer.jerseys



// for(let i = 0; i < jerseys.length; i++){
//   console.log(jerseys[i]) 
// }

// // accessing individual scores
// // console.log(surfer.score.red) // scores for jersey

// // displaying individual scores the pro

//   // using red for example, change for dinamycally later
//   const redScores = surfer.score.red // Can use this dinamically to change just the color of the scores surfer.score.[blue] Get the color from lycra!
//   for (let waveScore = 0; waveScore < redScores.length; waveScore++){
//     // waveScore = index = waveNum
//     // redScores[waveScore] = Score value
//     // console.log(waveScore)
//     // console.log(redScores[waveScore])

//     console.log(`#${waveScore + 1} Score: ${redScores[waveScore]}`)
// }




// TODO 

// 1. Find a way to count waveNum by surfer ex. red wave#1 #2, now its counting every waves scored.
// 2. Create a new heat button. Clean all the scores.
// 3. Find a way to count the heats for future reference.
// 4. Store all the waves in a {} or [] and have them be displayed straight from there instead from the DOM.
// 5. When a new heat start store the last scores either in a {} or []
// 6. When the score is submitted send to the surfer.score[jerseycolor]
// 7. Get the surfer.score[jerseycolor] display it on the waves panel


// display score in the display box
// scoreInput.addEventListener('keydown', (e)=>{
//   // console.log(e.key)
//   // display.textContent = scoreInput.value;
//   if(e.key === 'Backspace'){
//     display.textContent = display.textContent.slice(0, -1)
//   }else{
//     let input = e.key
//     if(!isNaN(input) || input === '.'){
//       display.textContent += input
//     }else{
//       alert('enter number')
//     }
//   }
  
// })


// // after clicking checks if judge has picked surfers jersey
// confirmScore.addEventListener('click', ()=>{
//   surfer ? submitScore() : alert('pick surfer')
// })


// // submits the score
// // find a way to count the waves for each surfer individually
// // put the jersey waves into a array and count it from there
// const wavesArr = [];


// function submitScore(){
//   // console.log(typeof surfer, surfer)
//   let score = Number(scoreInput.value)
//   console.log(score > 0 && score <= 10 ? 'valid score' : 'not a valid score')
//   if(score > 0 && score <= 10){
//     console.log('submitting score!')
//     display.textContent = score
//     console.log(`You entered ${score} for the Surfer in ${surfer}`)
//     confirmScore.classList.add('active')
//     const div = document.createElement('div')
//     div.classList.add('waveScore')
//     waveNum++
//     div.innerHTML = `#${waveNum} Score: <br><span class="score">${score}</span>`
//     // abaixo colocar no surfista certo
//     scoreDisplayEl.appendChild(div)

//     if(surfer === 'Red'){
//       const redDis = document.querySelector('.redDis')
//     redDis.appendChild(div)//needs to change
//     }else if(surfer === 'White'){
//       const whiteDis = document.querySelector('.whiteDis')
//     whiteDis.appendChild(div)
//     }else if(surfer === 'Yellow'){
//       const yellowDis = document.querySelector('.yellowDis')
//     yellowDis.appendChild(div)
//     }else{
//       const blueDis = document.querySelector('.blueDis')
//     blueDis.appendChild(div)
//     }

//     wavesArr.push(surfer)
//     scoreInput.value = ''
//     // display.textContent = 0;
//     setTimeout(() => {
//       clear()
//       display.textContent = '';
//     }, 1200);
//   }else{
//     alert('Please enter a score from 0.1 through 10')
//     display.textContent = '';
//     scoreInput.value = ''
//   }
//   console.log(wavesArr)
// }


// function clear(){
//   // display.textContent = 0
//   confirmScore.classList.remove('active')
//   lycra.forEach((item)=>item.classList.remove('active'))
// }

// checks the buttons to add the class active
// lycra.forEach((item)=>{
//   item.addEventListener('click', ()=>{
//     surfer = item.textContent
//     console.log(`Surfer in ${surfer}`)

//     //repeat the forEach but just to remove the class, then add for the item that is clicked again.
//     lycra.forEach((otherItem)=>{
//       otherItem.classList.remove('active')
//     });
//     item.classList.add('active')
//   })
// })
