// module pattern
const gameBoard = (() => {
    let board = document.querySelector('#board')
    let cells = []
    
    const create = () => {
        for(i = 0; i < 9; i++){
            let cell = cellFactory();
            cells.push(cell.element(i));
            board.append(cell.element(i));
        }
    }
    return { create };
})();

// factory function
const cellFactory = () => {
    const element = (n) => {
        let newCell = document.createElement('div')
        newCell.classList.add('w-20', 'h-20', 'bg-white', 'rounded-md', 'shadow-md', 'hover:cursor-pointer')
        newCell.id = `cell-${n}`
        newCell.dataset.mark = ''

        return  newCell
    }
    return { element };
};

gameBoard.create()
