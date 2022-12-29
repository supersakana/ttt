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
    return { start };
})();

// module pattern
const board = (() => {
    let board = document.querySelector('#board')
    let cells = []
    
    // creates and appends board cells
    const create = () => {
        for(i = 0; i < 9; i++){
            let cell = cellFactory(i);
            cells.push(i);
            cell.addEventListener('click', () => { console.log(cell.id) })
        }
    }
    return { create, cells };
})();

// factory function
const cellFactory = (n) => {
    // returns and append new cell
    let cell = document.createElement('div')
    cell.classList.add('w-20', 'h-20', 'bg-white', 'rounded-md', 'shadow-md', 'hover:cursor-pointer')
    cell.id = `cell-${n}`
    cell.dataset.mark = ''
    document.getElementById('board').append(cell)

    return  cell
};

// factory function
const playerFactory = (m) => {
    let marker = m
    return { marker };
};


game.start()
