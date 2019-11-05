import { Injectable } from '@angular/core';
declare var $: any;
declare var jQuery: any;
@Injectable()
export class UtilService {
    constructor() { }

    dom(document) {
        return jQuery(document);
    }

    body(bodystr) {
        return jQuery(bodystr);
    }

    backstretch(arrstring: Array<string>, obj: {duration: number, fade: number, centeredY: boolean}) {
        return this.body('body').backstretch(
            arrstring,
            obj
        );
    }

    _this(hashstring) {
        return $(hashstring);
    }
}
