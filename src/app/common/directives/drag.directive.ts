import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
    OnInit,
    Input, HostBinding
} from '@angular/core';
import { DragService } from '../drag.service';

@Directive({
    selector: '[appDrag]'
})
export class DragDirective implements OnInit {
    topStart = 0;
    leftStart = 0;
    _allowDrag = true;
    md: boolean;

    constructor(public element: ElementRef) {}

    ngOnInit() {
        this.element.nativeElement.style.position = 'relative';
    }

    // @HostListener('mousedown', ['$event'])
    // onMouseDown(event: MouseEvent) {
    //     console.log('mousedown');
    //     if (event.button === 2) {
    //         return; // prevents right click drag, remove his if you don't want it
    //     }
    //     this.md = true;
    //     this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px', '');
    //     this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px', '');
    //     event.stopPropagation();
    // }
    //
    // @HostListener('document:mouseup')
    // onMouseUp(event: MouseEvent) {
    //     this.md = false;
    //     console.log('mouseup');
    // }
    //
    // @HostListener('document:mousemove', ['$event'])
    // onMouseMove(event: MouseEvent) {
    //     if (this.md && this._allowDrag) {
    //         this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
    //         this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
    //         console.log('mousemove');
    //     }
    // }
    //
    // @HostListener('touchstart', ['$event'])
    // onTouchStart(event: TouchEvent) {
    //     this.md = true;
    //     this.topStart = event.changedTouches[0].clientY - this.element.nativeElement.style.top.replace('px', '');
    //     this.leftStart = event.changedTouches[0].clientX - this.element.nativeElement.style.left.replace('px', '');
    //     event.stopPropagation();
    // }
    //
    // @HostListener('document:touchend')
    // onTouchEnd() {
    //     this.md = false;
    // }
    //
    // @HostListener('document:touchmove', ['$event'])
    // onTouchMove(event: TouchEvent) {
    //     if (this.md && this._allowDrag) {
    //         this.element.nativeElement.style.top = ( event.changedTouches[0].clientY - this.topStart ) + 'px';
    //         this.element.nativeElement.style.left = ( event.changedTouches[0].clientX - this.leftStart ) + 'px';
    //     }
    //     event.stopPropagation();
    // }

    //////

    @HostBinding('draggable')
    get draggable() {
        return true;
    }

    @Input()
    set appDrag(args: any) {
    }


    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        // console.log('dragstart');
    }
}
