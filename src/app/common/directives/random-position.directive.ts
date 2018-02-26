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
        const height = window.innerHeight - 250;
        const width = window.innerWidth - 100;
        bombElem.style.left =  Math.floor(Math.random() * width) + 1 + 'px';
        bombElem.style.top = Math.floor(Math.random() * height) + 1 + 'px';
        bombElem.style.opacity =  1;
    }
}
