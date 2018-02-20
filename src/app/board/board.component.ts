import {Component} from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html'
})

export class BoardComponent {
    score = 0;
    shouldReset = false;
    constructor() {}
    calcScore(e: any) {
        this.score = e === 1 ? this.score + 1 : this.score - 1;
    }

    getReset(e: any) {
        this.shouldReset = e;
    }
}
