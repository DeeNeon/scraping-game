import {Component, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html'
})

export class BoardComponent implements OnDestroy {
    score: 0;
    constructor() {}
    ngOnDestroy() {
    }
    onDrop(e: any) {
        if (e) {
            this.score++;
        }
    }
}
