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
    currentTime = 0;
    gameDuration = 120;
    bombRespawnThreshold = this.gameDuration / 24;
    laps = 0;

    generateBombs() {
        for (let x = 0; x < 25; x++) {
            this.x_axis.push(true);
        }
    }

    ngOnInit() {
        this.initGame();
    }

    initGame() {
        this.generateBombs();

        const gameDuration = timer(0, 500).subscribe(val => {

            // Decide when to popup another bomb
            this.currentTime += 0.5;
            if (this.bombRespawnThreshold === 0.5) {
                this.x_axis.push(true);
            } else {
                if (this.bombRespawnThreshold === this.currentTime) {
                    this.laps++;
                    this.x_axis.push(true);
                    this.currentTime = 0;
                }
                if (this.laps === 2) {
                    this.laps = 0;
                    this.bombRespawnThreshold -= 0.5;
                }
            }
            // end game
            if (val === 240 || this.score === this.gameDuration) {
                this.isGameOver = true;
                gameDuration.unsubscribe();
            }
        });
    }

    calcScore(event: any) {
        this.score = event === 1 ? this.score + 1 : this.score - 1;
        if (this.score < 0) {
            this.score = 0;
        }
    }

    getReset(event: any) {
        this.shouldReset = event;
    }
}
