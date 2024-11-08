let winNumber = 0

function generateButtons() {
    let buttonsNumber = document.getElementById('buttonsNumber').value
    winNumber =  Math.floor(Math.random() * buttonsNumber)
    for (let i = 0; i < buttonsNumber; ++i) {
        document.getElementById('game').innerHTML += `
            <button id="${i}" class="btn btn-primary" onclick="gameOver(id)">
                ${i + 1}
            </button>
        `
    }
}

function gameOver(elementId) {
    if (elementId == winNumber) {
        alert("Winner")
        window.location.reload();
    } else {
        alert('Loser')
        window.location.reload();
    }
}