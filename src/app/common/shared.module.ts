import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

/* Shared components */
import {BinComponent} from './bin/bin.component';
import {BombComponent} from './bomb/bomb.component';
import {TimerComponent} from './timer.component';

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
        RandomColorDirective
    ],
    exports: [
        CommonModule,
        BinComponent,
        BombComponent,
        TimerComponent,
        RandomColorDirective
    ],
    providers: []
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: SharedModule,
            providers: []
        };
    }
}