import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
    Input
} from '@angular/core';

@Directive({
    selector: '[appDrop]'
})
export class DropDirective {
    private options: any = {};
    constructor() {
    }
    @Output('drop') drop = new EventEmitter();
    @Input()
    set appDrop(options: any) {
        if (options) {
            this.options = options;
        }
    }

    @HostListener('dragenter', ['$event'])
    @HostListener('dragover', ['$event'])
    onDragOver(event) {
        event.preventDefault();
    }

    @HostListener('window:drop', ['$event'])
    onDrop(event) {
        console.log('drop');
        // const data =  JSON.parse(event.dataTransfer.getData('Text'));
        //
        this.drop.next(event);
    }
}
