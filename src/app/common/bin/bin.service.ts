import {Injectable} from '@angular/core';

@Injectable()
export class BinService {
    constructor() {}

    static binColorGenerator() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}




