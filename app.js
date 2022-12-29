// module pattern
const game = (() => {   
    const players = []

    // initializes a new game
    const start = () => {
        board.create()
        twoPlayers()
    }

    // creates 2 players
    const twoPlayers = () => {
        let p1 = playerFactory('X')
        players.push(p1)
        let p2 = playerFactory('O')
        players.push(p2)
    }

    // swaps player and returns current player's marker
    const makeMove = () => {
        swap()
        return players[1].marker
    }

    // swaps player position in array
    const swap = () => {
        current = players[0]
        players[0] = players[1]
        players[1] = current
    }
    return { start, makeMove };
})();

// module pattern
const board = (() => {
    let cells = []
    
    // creates and appends board cells
    const create = () => {
        for(i = 0; i < 9; i++){
            let cell = cellFactory(i);
            cells.push(i);
            cell.addEventListener('click', () => { cell.append(game.makeMove()) })
        }
    }
    return { create };
})();

// factory function
const cellFactory = (n) => {
    // returns and append new cell
    let cell = document.createElement('div')
    cell.classList.add('w-20', 'h-20', 'bg-white', 'rounded-md', 'shadow-md', 'hover:cursor-pointer')
    // cell.dataset.mark = ''
    document.getElementById('board').append(cell)
    return  cell
};

// factory function
const playerFactory = (m) => {
    let marker = m
    return { marker };
};

game.start()
