import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
    Input
} from '@angular/core';
import {DragService} from '../drag.service';

// export interface DropTargetOptions {
//     zone?: string;
// }

@Directive({
    selector: '[appDrop]'
})
export class DropDirective {
    private options: any = {};
    constructor(private dragService: DragService) {
    }
    @Output('drop') drop = new EventEmitter();
    @Input()
    set dropTarget(options: any) {
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
        console.log(event);
        // const data =  JSON.parse(event.dataTransfer.getData('Text'));
        //
        // this.drop.next(data);
    }
}
