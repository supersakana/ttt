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

    // swaps player and returns current player's symbol
    const makeMark = () => {
        swap()
        return players[1].sym
    }

    // swaps player position in array
    const swap = () => {
        [players[0], players[1]] = [players[1], players[0]]
    }
    return { start, makeMark };
})();

// module pattern
const board = (() => {
    let cells = []
    
    // creates and appends board cells
    const create = () => {
        for(i = 0; i < 9; i++){
            let cell = cellFactory(i);
            cells.push(i);
            cell.addEventListener('click', () => { 
                if(cell.dataset.sym == ''){
                    mark = game.makeMark()
                    cell.dataset.sym = mark
                    cell.append(mark)
                }
            })
        }
    }
    return { create };
})();

// factory function
const cellFactory = (n) => {
    // returns and append new cell
    let cell = document.createElement('div')
    cell.classList.add('w-20', 'h-20', 'bg-white', 'rounded-md', 'shadow-md', 'hover:cursor-pointer')
    cell.dataset.sym = ''
    document.getElementById('board').append(cell)
    return cell
};

// factory function
const playerFactory = (s) => {
    let sym = s
    return { sym };
};

game.start()
