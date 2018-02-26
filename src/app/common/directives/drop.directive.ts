import {
    Directive,
    EventEmitter,
    HostListener,
    Output,
    Input
} from '@angular/core';
import {DragService} from '../drag.service';

export interface DropTargetOptions {
    zone?: string;
}

@Directive({
    selector: '[appDrop]'
})
export class DropDirective {
    @Output('drop') drop = new EventEmitter();
    options: DropTargetOptions = {};

    constructor(private dragService: DragService) {}

    @Input()
    set appDrop(options: DropTargetOptions) {
        if (options) {
            this.options = options;
        }
    }

    @HostListener('dragenter', ['$event'])
    @HostListener('dragover', ['$event'])
    onDragOver(event) {
        const { zone = 'zone' } = this.options;
        if (this.dragService.accepts(zone)) {
            event.preventDefault();
        }
    }

    @HostListener('drop', ['$event'])
    onDrop(event) {
        const data =  event.dataTransfer && JSON.parse(event.dataTransfer.getData('Text'));
        if (data) {
            // increase bin size by 3px
            event.target.style.width = event.target.clientWidth + 3 + 'px';
            event.target.style.height = event.target.clientHeight + 3 + 'px';
            document.querySelector('#' + data).remove();
            this.drop.next(1);
        }
    }
}
