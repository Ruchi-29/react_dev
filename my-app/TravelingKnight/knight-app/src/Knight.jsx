import React from 'react';

export default class Knight extends React.Component {
    constructor(props) {
        super(props)
        this.x = [];
        this.y = [];
        this.n = 8;
        this.cX = [1, 1, 2, 2, -1, -1, -2, -2];
        this.cY = [2, -1, 1, -1, 2, -1, 1, -1];
        this.arr = [];
    }

    findMoves = (p, q) => {
        let count = 0;
        for (let i = 0; i < this.n; i++) {
            //position of x
            let xx = p + this.x[i];
            let yy = q + this.y[i];
            if (this.x >= 0 && this.y >= 0 && this.x < this.n && this.y < this.n && this.arr[xx][yy]) {
                count++;
                console.log("Movement= ", count)
            } else {
                console.log("Structure cannot be formed");
            }
            return count;
        }

    }
    findTour = () => {
        let arr =[];
        for (let i = 0; i < this.n; i++) {
            arr[i] = -1;
        }
        const sx = Math.floor(Math.random()*(this.n + 1));
        const sy = Math.floor(Math.random()*(this.n + 1));

        let initialY = sy;
        let initialX = sx;
        arr[(initialY * this.n)+ initialX] = 1;
        console.log(arr)
        this.knightMovements(arr)
    }

    knightMovements = (arr) => {

        for (let i = 0; i < 8; i++) {
            let es = '';
            for (let j = 0; j < 8; j++) {
                let space = arr[j * 8 + i] > 9 ? " " : "   ";
                es = es + space + arr[j * 8 + i];
            }
            console.log("---es", es);
        }
        //let moves = this.findMoves(2, 2);
        //console.log("Moves of knight", moves);
    }


    render() {
        return (
            <div>
                <input onClick={this.findTour} />
            </div>
        )
    }
}