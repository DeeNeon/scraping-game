import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/* Shared components */
import {BinComponent} from './bin/bin.component';
import {BombComponent} from './bomb/bomb.component';
import {TimerComponent} from './timer.component';
import {ScoreComponent} from './score.component';

/* Directives*/
import {RandomColorDirective} from './directives/random-color.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BinComponent,
        BombComponent,
        TimerComponent,
        ScoreComponent,
        RandomColorDirective
    ],
    exports: [
        CommonModule,
        BinComponent,
        BombComponent,
        TimerComponent,
        ScoreComponent,
        RandomColorDirective
    ],
    providers: []
})

export class SharedModule {
}
