let btn = document.getElementsByClassName("spinBtn")
let output = document.getElementsByClassName("wheel")

let suits = [
    "Clubs",
    "Spades",
    "Diamonds",
    "Hearts"
];
let getRandomIndex = function (suits) {
    let rand = Math.random() * suits.length;
    return Math.floor(rand);
};

let getRandomSymbol = function (suits) {
    return suits[getRandomIndex(suits)];
};

let generateSuit = function (suits) {
    let randomSuit =
        getRandomSymbol(suits);
    
    console.group(randomSuit);

    return randomSuit;
};

btn.addEventListener("click", function () {
    let suit = generateSuit(suits);
    output.textContent = "This is your suit, " + suit
})