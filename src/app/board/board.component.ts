import {Component, OnInit} from '@angular/core';
import { timer } from 'rxjs/observable/timer';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html'
})

export class BoardComponent implements OnInit {
    score = 0;
    shouldReset = false;
    x_axis = [];
    isGameOver = false;
    ngOnInit() {
        for (let x = 0; x < 20; x++) {
            this.x_axis.push(true);
        }

        const gameClock = timer(0, 1000).subscribe(val => {
            if (val === 120 || this.score === 120) {
               this.isGameOver = true;
               gameClock.unsubscribe();
           }
        });
    }
    calcScore(e: any) {
        if (e === -1) {
            this.x_axis.push(1);
        }
        this.score = e === 1 ? this.score + 1 : this.score - 1;
    }
    getReset(e: any) {
        this.shouldReset = e;
    }
}
