import {
    Directive,
    EventEmitter,
    HostListener,
    Input, HostBinding
} from '@angular/core';
import { DragService } from '../drag.service';

export interface DraggableOptions {
    zone?: string;
    data?: any;
}

@Directive({
    selector: '[appDrag]'
})
export class DragDirective {
    private options: DraggableOptions = {};

    constructor(private dragService: DragService) {
    }

    @HostBinding('draggable')
    get draggable() {
        return true;
    }

    @Input()
    set appDrag(options: DraggableOptions) {
        if (options) {
            this.options = options;
        }
    }
    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        const { zone = 'zone', data = {} } = this.options;
        this.dragService.startDrag(zone);
        event.dataTransfer.setData('Text', JSON.stringify(event.target.id));
    }
}
