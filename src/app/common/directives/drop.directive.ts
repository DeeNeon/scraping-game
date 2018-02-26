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
    options: DropTargetOptions = {};
    @Output('drop') drop = new EventEmitter();

    constructor(private dragService: DragService) {
    }

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
            event.target.style.width = event.target.clientWidth + 3 + 'px';
            event.target.style.height = event.target.clientHeight + 3 + 'px';
            this.drop.next(data);
        }
    }
}
