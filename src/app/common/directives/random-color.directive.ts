import {
    Directive,
    ElementRef,
    OnInit,
    OnDestroy
} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Directive({
    selector: '[appRandomColor]'
})
export class RandomColorDirective implements OnInit, OnDestroy {
    private binColorObs: Subscription;

    constructor(private el: ElementRef) {}
    static genColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = RandomColorDirective.genColor();
        console.log(this.el.nativeElement);
        this.binColorObs = Observable.interval(1000)
            .subscribe((x: any) => {
                if (x % 40 === 0) {
                    this.el.nativeElement.style.backgroundColor = RandomColorDirective.genColor();
                }
            });
    }
    ngOnDestroy() {
        this.binColorObs.unsubscribe();
    }
}
