import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/* Shared components */
import {BinComponent} from './bin/bin.component';
import {BombComponent} from './bomb/bomb.component';
import {TimerComponent} from './timer.component';

/* Directives*/
import {RandomColorDirective} from './directives/random-color.directive';
import {RandomPositionDirective} from './directives/random-position.directive';
import {BombHandlerDirective} from './directives/bomb-handler.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BinComponent,
        BombComponent,
        TimerComponent,
        RandomColorDirective,
        RandomPositionDirective,
        BombHandlerDirective
    ],
    exports: [
        CommonModule,
        BinComponent,
        BombComponent,
        TimerComponent,
        RandomColorDirective,
        RandomPositionDirective,
        BombHandlerDirective
    ],
    providers: []
})

export class SharedModule {
}
