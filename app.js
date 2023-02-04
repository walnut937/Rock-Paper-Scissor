//gobal variables
let score = document.getElementById('score')
let user = document.getElementById('user')
let bot = document.getElementById('bot')
let result = document.getElementById('result')
let reset = document.getElementById('reset')
//game starts from here
playgame()
function resetgame(){
    score.innerText = 0
    user.innerText = ''
    bot.innerText = ''
    result.innerText = ''
}
//compare func
function compare(playerchoice, botchoice){
    let point 
    //tie
    if(playerchoice == botchoice){
        point = 0
    }
    //user wins
    else if(playerchoice == 'rock' && botchoice == 'scissor'){
        point = 1
    }
    else if(playerchoice == 'paper' && botchoice == 'rock'){
        point = 1
    }
    else if(playerchoice == 'scissor' && botchoice == 'paper'){
        point = 1
    }
    //user loses
    else{
        point = -1
    }
    //returning the point 
    return point
}
//computer choices
function getbotchoice(){
    let arr = ['rock', 'paper', 'scissor']
    let item = arr[Math.floor(Math.random()*3)]
    return item
}
//user choice
function playgame(){
    //collecting user input data
    let buttons = document.querySelectorAll('.btn')
    buttons.forEach(playerchoice => {
        playerchoice.onclick = () =>getuserchoice(playerchoice)
    })
    //reset activate on click
    reset.onclick = () => resetgame()
}
//collecting the data of user and computer and point
function getuserchoice(playerchoice){
    const botchoice = getbotchoice()
    const point = compare(playerchoice.value, botchoice)
    final_result(point, playerchoice.value, botchoice)
}
//final result
function final_result(point, playerchoice, botchoice){
    //result
    switch(point){
        case -1:
            result.innerText = `You Lose`
            break
        case 0:
            result.innerText = `Its Tie`
            break
        case 1:
            result.innerText = `You win`
            break
    }
    score.innerText = `${Number(score.innerText) + point}`
    bot.innerText = `${botchoice}`
    user.innerText = `${playerchoice}`
}