import {
    Directive,
    EventEmitter,
    HostListener,
    Output,
    Input
} from '@angular/core';

@Directive({
    selector: '[appDrop]'
})
export class DropDirective {
    constructor() {
    }
    @Output('drop') drop = new EventEmitter();
    @Input()
    set appDrop(args: any) {
    }

    @HostListener('dragenter', ['$event'])
    @HostListener('dragover', ['$event'])
    onDragOver(event) {
        event.preventDefault();
    }

    @HostListener('drop', ['$event'])
    onDrop(e: any) {
        // FIX
        if (Number.isInteger(e)) {
            console.log(e);
            this.drop.next(1);
        }
    }
}
