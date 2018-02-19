import {
    Directive,
    ElementRef,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Directive({
    selector: '[appRandomColor]'
})
export class RandomColorDirective implements AfterViewChecked, OnDestroy {
    private binColorObs: Subscription;

    constructor(private el: ElementRef) {}
    static genColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    ngAfterViewChecked() {
        this.binColorObs = Observable.interval(1000)
            .subscribe((x: any) => {
                if (x === 40) {
                    this.el.nativeElement.style.backgroundColor = RandomColorDirective.genColor();
                }
            });
    }
    ngOnDestroy() {
        this.binColorObs.unsubscribe();
    }
}
