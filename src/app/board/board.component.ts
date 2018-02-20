import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html'
})

export class BoardComponent implements OnInit, OnDestroy {
    score = 0;
    shouldReset = false;
    y_axis = [1, 2, 3, 4];
    x_axis = [1, 2, 3];
    private lifeSpanObs: Subscription;
    constructor() {}
    ngOnInit() {
        this.lifeSpanObs = Observable.interval(5000)
            .subscribe(() => {
                this.y_axis = [1,2,3];
                this.x_axis = [1,2,3,4];
            });
    }
    ngOnDestroy() {
        this.lifeSpanObs.unsubscribe();
    }
    calcScore(e: any) {
        this.score = e === 1 ? this.score + 1 : this.score - 1;
    }
    getReset(e: any) {
        this.shouldReset = e;
    }
}
