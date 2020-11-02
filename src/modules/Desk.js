'use strict';
import Component from './framework/component.js';
import chessData from './data/chess.js'
export default class Auth extends Component {
    constructor($el) {
        super({}, './assets/css/desk.css', $el);
        this.data.time = 0;
        const whites = ['♙','♕','♔','♗','♘','♖'];
        let switchFlag = false;
        this.data.cells = chessData.chess.map((row, i) => row.map((col, j) => {
            if (j === 0) {
                switchFlag = !switchFlag;
            }
            let player
            if (col) {
                player = whites.includes(col) ? 1 : 2;
            } else {
                player = 0;
            }
            let background
            if (switchFlag) {
                background = j%2 ? 'black' : 'white'
            } else {
                background = j%2 ?  'white' : 'black'
            }
            return {
                figure: col,
                player,
                row: i,
                col: j,
                background
            };
        }));
       /* for (let row of this.data.game) {
            cells.push([]);
            for (let col of row) {
                let player
                if (col) {
                    player = whites.include(col) ? 1 : 2;
                } else {
                    player = 0;
                }
                const cell = {
                    figure: col,
                    player,
                    row: i,
                    col: j
                };
                cells[i].push(cell);
                j++;
            }
            i++;
        }*/
    }
    template() {
        return `
            <main>
                <div class="timer">${this.data.time}</div>
                <div class="desk">
                </div>
            </main>
        `
    }
    methods() {
        return {
            allowDrop (e) {
                e.preventDefault();
            },
            dropFigure (callback) {
                return function(e) {
                    callback(e);
                }
            },
            dragFigure (callback) {
                return function(e) {
                    callback(e);
                }
            }
        }
    }
    onRender() {
        const desk = this.$el.querySelector('.desk')
        for (let row of this.data.cells) {
            for (let col of row) {
                const cell = document.createElement('div');
                const icon = col.figure ? chessData.iconMapping.find(iconObj => iconObj.figures.includes(col.figure)).icon : '';
                cell.innerHTML = `<i class="figure" draggable="true">${icon}</i>`;
                cell.querySelector('.figure').ondragstart = this.methods.dragFigure(e => {
                    let linkedCol = col;
                    e.dataTransfer.setData('text', JSON.stringify(linkedCol));
                    linkedCol.player = 0;
                    linkedCol.figure = '';
                });
                cell.setAttribute('class', `cell ${col.background} ${col.player === 1 ? 'whites' : 'blacks'}`);
                cell.ondrop = this.methods.dropFigure(e => {
                    const data = JSON.parse(e.dataTransfer.getData('text'));
                    col.player = data.player;
                    col.figure = data.figure;
                    this.render();
                })
                cell.ondragover = this.methods.allowDrop
                desk.appendChild(cell);
            }
        }
    }
}
