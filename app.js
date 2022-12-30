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

    const end = () => {
        if(board.winExsists(players[1].sym)){
            console.log('woo')
        }
    }
    return { start, makeMark, end };
})();

// module pattern
const board = (() => {
    let cells = []
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                  [0, 3, 6], [1, 4, 7], [2, 5, 8],
                  [0, 4, 8], [6, 4, 2]]
    
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
                    cells[parseInt(cell.dataset.no)] = mark
                    game.end()
                }
            })
        }
    }

    // returns true if there is a winning combo on the board
    const winExsists = (sym) => {
        return wins.some(combo => combo.every(cell => cells[cell] == sym))
    }
    return { cells, create, winExsists };
})();

// factory function
const cellFactory = (n) => {
    // returns and append new cell
    let cell = document.createElement('div')
    cell.classList.add('w-20', 'h-20', 'bg-white', 'rounded-md', 'shadow-md', 'hover:cursor-pointer', 'flex', 'justify-center', 'items-center')
    cell.dataset.sym = ''
    cell.dataset.no = n
    document.getElementById('board').append(cell)
    return cell
};

// factory function
const playerFactory = (s) => {
    let sym = s
    return { sym };
};

game.start()