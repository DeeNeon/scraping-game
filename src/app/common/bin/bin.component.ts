import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-bin',
    templateUrl: './bin.component.html'
})

export class BinComponent {
    @Output()
    scoreCounter: EventEmitter<any> = new EventEmitter();
    @Input()
    reset = false;
    constructor() {
    }
    onDrop(e: any) {
        if (Number.isInteger(e)) {
            this.scoreCounter.emit(e);
        }
    }
}
