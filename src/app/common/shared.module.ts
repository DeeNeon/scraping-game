import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/* Shared components */
import {BinComponent} from './bin/bin.component';
import {BombComponent} from './bomb/bomb.component';
import {TimerComponent} from './timer.component';
import {ScoreComponent} from './score.component';

/* Directives*/
import {RandomColorDirective} from './directives/random-color.directive';
import {RandomPositionDirective} from './directives/random-position.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BinComponent,
        BombComponent,
        TimerComponent,
        ScoreComponent,
        RandomColorDirective,
        RandomPositionDirective
    ],
    exports: [
        CommonModule,
        BinComponent,
        BombComponent,
        TimerComponent,
        ScoreComponent,
        RandomColorDirective,
        RandomPositionDirective
    ],
    providers: []
})

export class SharedModule {
}
