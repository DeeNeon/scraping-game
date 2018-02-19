import { Component, AfterContentInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'app-timer',
    template: '<h2>Change in: {{countDown}}s</h2>'
})

export class TimerComponent implements AfterContentInit, OnDestroy {
    countDown = 40;
    interval: any;

    constructor() {}
    ngAfterContentInit() {

        this.interval = Observable.interval(1000)
            .subscribe(() => {
                this.countDown--;
                if (this.countDown === -1) {
                    this.countDown = 40;
                }
            });
    }

    ngOnDestroy() {
        this.interval.unsubscribe();
    }
}
