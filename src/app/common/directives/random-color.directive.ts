import {
    Directive,
    ElementRef,
    Input,
    OnChanges
} from '@angular/core';

@Directive({
    selector: '[appRandomColor]'
})
export class RandomColorDirective implements OnChanges {
    // private binColorObs: Subscription;
    @Input()
    shouldChange = false;

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.backgroundColor = RandomColorDirective.genColor();
    }
    static genColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    changeColor() {
        this.el.nativeElement.style.backgroundColor = RandomColorDirective.genColor();
    }
    ngOnChanges() {
        if (this.shouldChange) {
            this.changeColor();
            this.shouldChange = false;
        }
    }
}
