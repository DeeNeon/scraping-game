import { Injectable } from '@angular/core';

@Injectable()
export class DragService {
    private zone: string;

    /*
    Determines if drag has started and where.
     */
    /**
     * @param
     * @type {object}
     */
    startDrag(zone: string) {
        this.zone = zone;
    }

    /*
    In case there's a zone where it shouldn't be allowed.
     */
    /**
     * @param
     * @type {string}
     */
    accepts(zone: string): boolean {
        return zone === this.zone;
    }
}
