let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEL)

let count = 0

function increment() {
    count += 1
    countEL.textContent = count
}
function decrement() {
    count -= 1
    countEL.textContent = count
}

function save() {
    console.log(count)
    saveEl.textContent += count + " - "
    countEL.textContent = 0
    count = 0
}

let username = 'person'
let message = "You Have Three New notifications"
let messageToUser = message + ", " + username + "!"

let name = "Ben"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)

// ------
// let welcomeEl = document.getElementById("welcome-el")
// welcomeEl.innerText = myGreeting

// welcomeEl.innerText += "👋"