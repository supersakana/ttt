const gameBoard = (() => {
    let board = document.querySelector('#board')
    let cells = []
    
    const create = () => {
        for(i = 0; i < 9; i++){
            let cell = document.createElement('div')
            cell.classList.add('w-20', 'h-20', 'bg-white', 'rounded-md', 'shadow-md', 'hover:cursor-pointer')
            cell.dataset.mark = ''
            cells.push(cell)
            board.append(cell)
        }
    }
    return { create };
})();

gameBoard.create()