import {Component, AfterContentInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'app-timer',
    template: '<h2 class="bottom-timer">Change in: {{countDown}}s</h2>'
})

export class TimerComponent implements AfterContentInit, OnDestroy {
    countDown = 40;
    interval: any;
    @Output() reset: EventEmitter<any> = new EventEmitter<any>();

    ngAfterContentInit() {
        this.interval = Observable.interval(1000)
            .subscribe(() => {
                this.countDown--;
                this.reset.emit(false);
                if (this.countDown === -1) {
                    this.countDown = 40;
                    this.reset.emit(true);
                }
            });
    }

    ngOnDestroy() {
        this.interval.unsubscribe();
    }
}
