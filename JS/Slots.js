function playAGame(quarters) {
    var winningNumber = 50;
    while (quarters >= 1) {
        if (Math.floor(Math.random() * 100) == winningNumber) {
            quarters += Math.floor((Math.random() * 50) + 50);
            return "You won! You now have " + quarters + " left!";
        } else {
            quarters--;
        }
        if (quarters == 0) {
            return "You lost! There are no more quarters in the machine!!";
        }
    }
}
console.log(playAGame(100));
