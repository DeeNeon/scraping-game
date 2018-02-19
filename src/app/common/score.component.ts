import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-score',
    template: '<h2 class="score">Score: {{score}}</h2>'
})

export class ScoreComponent implements OnInit, OnDestroy {
    score = 0;
    // constructor(private service: ScoreService) {
    // }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}
