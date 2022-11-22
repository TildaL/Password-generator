const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswCharacters = []

let firstPsw = document.getElementById('psw1')
let secondPsw = document.getElementById('psw2')

//Den här funktionen ska välja ett random index. Antalet index bestäms av 
//const character array'n
function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random()*characters.length)
    return randomIndex
}

//Den här funktionen ska med hjälp av ett random index lägga en (eller 15)
// karaktärer från den långa array'n i den nya arrayen.
function getNewArray() {
    pswCharacters += pswCharacters.push(characters[getRandomCharacter()])
    return pswCharacters
}

//Sedan ska jag (loopa?) lägga de 15 karaktärerna som text content
//i två knappar 

function getPsw() {
    firstPsw.textContent += 
    pswCharacters += pswCharacters.push()

}


// 
// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
    