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
            let cell = cellFactory();
            cells.push(i);
            board.append(cell.element(i));
        }
    }
    return { create };
})();

// factory function
const cellFactory = () => {
    // returns cell element to be appended
    const element = (n) => {
        let newCell = document.createElement('div')
        newCell.classList.add('w-20', 'h-20', 'bg-white', 'rounded-md', 'shadow-md', 'hover:cursor-pointer')
        newCell.id = `cell-${n}`
        newCell.dataset.mark = ''

        return  newCell
    }
    return { element };
};

// factory function
const playerFactory = (m) => {
    let marker = m
    return { marker };
};


game.start()
