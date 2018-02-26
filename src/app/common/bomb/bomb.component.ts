import {Component, ViewChild, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-bomb',
    template: `
    <div class="bomb" appRandomPosition [appDrag]="{data: 1}" appRandomColor #bomb>
        <span>{{durationLabel}}</span>
    </div>`
})

export class BombComponent implements OnInit, OnDestroy {
    lifeSpanObs: Subscription;
    durationLabel = 0;
    @Output()
    scoreEmitter: EventEmitter<any> = new EventEmitter();
    @ViewChild('bomb') bomb: any;

    ngOnInit() {
        this.createBomb();
    }

    ngOnDestroy() {
        this.lifeSpanObs.unsubscribe();
    }

    createBomb() {
        this.durationLabel = Math.floor(Math.random() * 11) + 5;
        this.lifeSpanObs =
        Observable.interval(1000)
            .subscribe(() => {
                this.durationLabel--;
                if (this.durationLabel === 0) {
                    this.bomb.nativeElement.remove();
                    this.scoreEmitter.emit(-1);
                }
            });
    }
}
