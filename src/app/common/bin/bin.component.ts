import { Component, OnInit, OnDestroy } from '@angular/core';
// import {BinService} from './bin.service';

@Component({
    selector: 'app-bin',
    templateUrl: './bin.component.html'
})

export class BinComponent implements OnInit, OnDestroy {

    // constructor(private service: BinService) {
    // }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    onDrop(data: any) {
        console.log(`dropped: ${data}`);
    }
}
