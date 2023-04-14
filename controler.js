import view from "./view.js";

view.render();

let state = ["x", "o"];

const status = Array(9).fill(null);
const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let currentTurn = 0;

let gamePause = 0;

function winner() {
    let win = false;
    list.forEach((item) => {
        const [i, j, k] = item;
        if (status[i] && status[i] === status[j] && status[j] === status[k]) {
            win = true;
        }
    });
    return win;
}

view.showPlayerText(`now ${state[+currentTurn].toLocaleUpperCase()} turn`);

function resetGameState() {
    status.fill(null);
    currentTurn = 0;
    console.log(status);
    gamePause = 0;
}

view.subscriber(function (event) {
    const element = event.target;
    if (element.className !== "box" || status[element.id] !== null || gamePause)
        return;

    view.showContent(element, state[+currentTurn]);

    status[element.id] = state[+currentTurn];

    if (winner()) {
        view.showPlayerText(
            `${state[
                +currentTurn
            ].toLocaleUpperCase()} win the game congratulations🏆🏆🏆`
        );
        resetGameState();
        gamePause = 1;
    } else if (!status.some((text) => text === null)) {
        view.showPlayerText(`match draw try new game`);
        resetGameState();
        gamePause = 1;
    } else {
        currentTurn = !currentTurn;
        view.showPlayerText(
            `now ${state[+currentTurn].toLocaleUpperCase()} turn`
        );
    }

});

view.clearSubscriber(() => {
    resetGameState();
    view.showPlayerText(`now ${state[+currentTurn].toLocaleUpperCase()} turn`);
});
