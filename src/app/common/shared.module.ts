import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/* Shared components */
import {BinComponent} from './bin/bin.component';
import {BombComponent} from './bomb/bomb.component';
import {TimerComponent} from './timer.component';

/* Directives*/
import {RandomColorDirective} from './directives/random-color.directive';
import {RandomPositionDirective} from './directives/random-position.directive';
import {DragDirective} from './directives/drag.directive';
import {DropDirective} from './directives/drop.directive';
import {DragService} from './drag.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BinComponent,
        BombComponent,
        TimerComponent,
        RandomColorDirective,
        DragDirective,
        RandomPositionDirective,
        DropDirective
    ],
    exports: [
        CommonModule,
        BinComponent,
        BombComponent,
        TimerComponent,
        RandomColorDirective,
        DragDirective,
        RandomPositionDirective,
        DropDirective
    ],
    providers: [DragService]
})

export class SharedModule {
}
