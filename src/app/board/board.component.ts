import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html'
})

export class BoardComponent implements OnInit, OnDestroy {
    score = 0;
    shouldReset = false;
    x_axis = [];
    constructor() {}
    ngOnInit() {
        for (let x = 0; x < 20; x++) {
            this.x_axis.push(true);
        }
    }
    ngOnDestroy() {
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
