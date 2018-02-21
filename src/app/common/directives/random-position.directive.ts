import {
    Directive,
    ElementRef,
    AfterViewInit,
} from '@angular/core';

@Directive({
    selector: '[appRandomPosition]'
})
export class RandomPositionDirective implements AfterViewInit {

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        const bombElem = this.el.nativeElement;
        bombElem.style.left =  Math.floor(Math.random() * 95) + 1 + '%';
        bombElem.style.top =  Math.floor(Math.random() * 80) + 1 + '%';
        bombElem.style.opacity =  1;
    }
}
