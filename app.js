const Game = (() => {   
    const players = []

    const start = () => {
         Board.create()
        twoPlayers()
    }

    const twoPlayers = () => {
        let p1 = playerFactory('X', 1)
        let p2 = playerFactory('O', 2)
        players.push(p1, p2)
    }

    const currentPlayer = () => {
        swap()
        return players[1]
    }

    const swap = () => {
        [players[0], players[1]] = [players[1], players[0]]
    }

    const end = (player) => {
        if(Board.winExsists(player.sym)){
            Display.winner(player)
        } else if (Board.tieExsists()){
            Display.tie()
        }
    }
    return { start, currentPlayer, end };
})();

const Display = (() => {
    const winner = (player) => {
        let element = document.querySelector('.winner')
        element.innerHTML = `${player.name} is the winner!`
    }

    const tie = () => {
        let element = document.querySelector('.winner')
        element.innerHTML = "It's a tie!"
    }
    return { winner, tie }
})();

const Board = (() => {
    let cells = []
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                  [0, 3, 6], [1, 4, 7], [2, 5, 8],
                  [0, 4, 8], [6, 4, 2]]
    
    const create = () => {
        for(i = 0; i < 9; i++){
            let cell = cellFactory(i);
            cells.push(i);
            cell.addEventListener('click', () => { 
                markBoard(cell)
            })
        }
    }

    const markBoard = (cell) => {
        if(cell.dataset.sym == ''){
            current = Game.currentPlayer()
            cell.dataset.sym = current.sym
            cell.append(current.sym)
            cells[parseInt(cell.dataset.no)] = current.sym
            Game.end(current)
        }
    }

    const winExsists = (sym) => {
        return wins.some(combo => combo.every(cell => cells[cell] == sym))
    }

    const tieExsists = () => {
        return cells.every(cell => cell == 'X' || cell == 'O')
    }
    return { cells, create, winExsists, tieExsists };
})();

const cellFactory = (n) => {
    let cell = document.createElement('div')
    cell.classList.add('w-20', 'h-20', 'bg-white', 'rounded-md', 'shadow-md', 'hover:cursor-pointer', 'flex', 'justify-center', 'items-center')
    cell.dataset.sym = ''
    cell.dataset.no = n
    document.getElementById('board').append(cell)
    return cell
};

const playerFactory = (sym, no) => {
    let name = `Player ${no}`
    return { sym, name };
};

Game.start()