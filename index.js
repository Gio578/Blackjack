let cards = [] // array
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ""

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let cardImage1 = document.getElementById("cardImage1")
let cardImage2 = document.getElementById("cardImage2")
let cardImage3 = document.getElementById("cardImage3")

//let player = {
//    name: "Gio",
//    chips: 145
//}

//let playerEl = document.getElementById("player-el")
//playerEl.textContent = player.name + ": $" + player.chips

/////////////////
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

let gameCount = 0

function startGame() {
    console.log(gameCount)
    if (gameCount > 1) {
        cardImage1.src = ''
    }

    if (gameCount > 1) {
        cardImage2.src = ''
    }
    isAlive = true
    let firstCard = getRandomCard()
    console.log(firstCard)
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    //The Card Images 1
    if (firstCard === 11) {
        cardImage1.src = 'images/ace.png'
    }

    if (firstCard === 2) {
        cardImage1.src = 'images/2.png'
    }

    if (firstCard === 3) {
        cardImage1.src = 'images/3.png'
    }

    if (firstCard === 4) {
        cardImage1.src = 'images/4.png'
    }

    if (firstCard === 5) {
        cardImage1.src = 'images/5.png'
    }

    if (firstCard === 6) {
        cardImage1.src = 'images/6.png'
    }

    if (firstCard === 7) {
        cardImage1.src = 'images/7.png'
    }

    if (firstCard === 8) {
        cardImage1.src = 'images/8.png'
    }

    if (firstCard === 9) {
        cardImage1.src = 'images/9.png'
    }

    if (firstCard === 10) {
        cardImage1.src = 'images/k.png'
    }

    // The Card Images 2
    if (secondCard === 11) {
        cardImage2.src = 'images/ace.png'
    }

    if (secondCard === 2) {
        cardImage2.src = 'images/2.png'
    }

    if (secondCard === 3) {
        cardImage2.src = 'images/3.png'
    }

    if (secondCard === 4) {
        cardImage2.src = 'images/4.png'
    }

    if (secondCard === 5) {
        cardImage2.src = 'images/5.png'
    }

    if (secondCard === 6) {
        cardImage2.src = 'images/6.png'
    }

    if (secondCard === 7) {
        cardImage2.src = 'images/7.png'
    }

    if (secondCard === 8) {
        cardImage2.src = 'images/8.png'
    }

    if (secondCard === 9) {
        cardImage2.src = 'images/9.png'
    }

    if (secondCard === 10) {
        cardImage2.src = 'images/k.png'
    }

    gameCount += 1

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    sumEl.textContent = "Sum: " + sum
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "You Won, Black Jack!"
    } else {
        isAlive = false
        message = "You Lost :("
    }
    
    messageEl.textContent = message

    //The card Images

    //if ()
}

cardImage3.src = ''

function newCard() {

    if (gameCount >= 1) {
        cardImage3.src = ''
    }

    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()

        if (thirdCard == 11) {
            cardImage3.src = 'images/ace.png'
        }

        if (thirdCard == 2) {
            cardImage3.src = 'images/2.png'
        }

        if (thirdCard == 3) {
            cardImage3.src = 'images/3.png'
        }

        if (thirdCard == 4) {
            cardImage3.src = 'images/4.png'
        }

        if (thirdCard == 5) {
            cardImage3.src = 'images/5.png'
        }

        if (thirdCard == 6) {
            cardImage3.src = 'images/6.png'
        }

        if (thirdCard == 7) {
            cardImage3.src = 'images/7.png'
        }

        if (thirdCard == 8) {
            cardImage3.src = 'images/8.png'
        }

        if (thirdCard == 9) {
            cardImage3.src = 'images/9.png'
        }

        if (thirdCard == 10) {
            cardImage3.src = 'images/k.png'
        }

        sum += thirdCard

        cards.push(thirdCard)

        renderGame()
    }
}
