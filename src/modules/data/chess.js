const chess = [
    ['♜','♞','♝','♛','♚','♝','♞','♜'],
    ['♟','♟','♟','♟','♟','♟','♟','♟'],
    ['','','','','','','','',],
    ['','','','','','','','',],
    ['','','','','','','','',],
    ['','','','','','','','',],
    ['♙','♙','♙','♙','♙','♙','♙','♙'],
    ['♖','♘','♗','♕','♔','♗','♘','♖']
];
const iconMapping = [
    {
       figures: ['♟', '♙'],
       icon: '<i class="fas fa-chess-pawn"></i>'
    },
    {
        figures: ['♜', '♖'],
        icon: '<i class="fas fa-chess-rook"></i>'
    },
    {
        figures: ['♞', '♘'],
        icon: '<i class="fas fa-chess-knight"></i>'
    },
    {
        figures: ['♝', '♗'],
        icon: '<i class="fas fa-chess-bishop"></i>'
    },
    {
        figures: ['♛', '♕'],
        icon: '<i class="fas fa-chess-queen"></i>'
    },
    {
        figures: ['♚', '♔'],
        icon: '<i class="fas fa-chess-king"></i>'
    }
]
export default {
    chess,
    iconMapping
}
