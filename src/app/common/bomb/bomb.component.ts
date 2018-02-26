import {Component, OnInit, OnDestroy, Output, EventEmitter, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-bomb',
    template: `
    <div class="bomb" id="bomb_{{id}}" appRandomPosition [appDrag]="{data: 1}" appRandomColor #bomb *ngIf="!shouldExplode">
        <span>{{durationLabel}}</span>
    </div>`
})

export class BombComponent implements OnInit, OnDestroy {
    @Output() scoreEmitter: EventEmitter<any> = new EventEmitter();
    @Input() threshold = 120;
    lifeSpanObs: Subscription;
    durationLabel = 0;
    shouldExplode = false;
    id = 0;

    ngOnInit() {
        this.createBomb();
        // bomb id
        this.id = Math.floor(Math.random() * 9999) + 1;
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
                    this.shouldExplode = true;
                    this.scoreEmitter.emit(-1);
                }
            });
    }
}
