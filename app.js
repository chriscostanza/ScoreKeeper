const p1 = {
    score: 0,
    button: document.querySelector('#p1Add'),
    display: document.querySelector('#p1')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Add'),
    display: document.querySelector('#p2')
}

const maxScore = document.querySelector('#maxScore')
const resetScore = document.querySelector('#resetScore')
const playerNames = document.querySelector('#playerNames')
const nameFormDiv = document.querySelector('#nameForm')
const p1ScoreName = document.querySelector('#p1ScoreName')
const p2ScoreName = document.querySelector('#p2ScoreName')


playerNames.addEventListener('submit', function (e) {
    e.preventDefault();
    p1.button.innerText = `+1 ${playerNames.elements.p1Name.value}`;
    p2.button.innerText = `+1 ${playerNames.elements.p2Name.value}`;
    p1ScoreName.innerText = playerNames.elements.p1Name.value;
    p2ScoreName.innerText = playerNames.elements.p2Name.value;
    nameFormDiv.style.display = 'none';
})

function addPoint(player, opponent) {
    player.score += 1;
    player.display.innerText = player.score;

    if (player.score >= maxScore.value && player.score - opponent.score >= 2 || opponent.score >= maxScore.value && opponent.score - player.score >= 2) {
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    else if (player.score > opponent.score) {
        player.display.style.color = 'green';
        opponent.display.style.color = 'red';
    }
    else if (player.score == opponent.score) {
        player.display.style.color = '';
        opponent.display.style.color = '';
    }
}

function reset() {
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = p1.score;
    p2.display.innerText = p2.score;
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.display.style.color = ''
    p2.display.style.color = ''
}

maxScore.addEventListener('change', function () {
    reset();
})

p1.button.addEventListener('click', (e) => {
    addPoint(p1, p2);
})

p2.button.addEventListener('click', (e) => {
    addPoint(p2, p1);
})

resetScore.addEventListener('click', (e) => {
    reset();
})

