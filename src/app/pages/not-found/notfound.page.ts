import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from 'src/app/utils/jquery-utils';

@Component({
    templateUrl: 'notfound.page.html',
    styleUrls: ['notfound.page.scss']
})

export class NotfoundPageComponent implements OnInit, OnDestroy {

    constructor(private util: UtilService) { }

    ngOnInit() {
        this.util.dom(document).ready(() => {
            'use strict';
            this.util.backstretch([
                './../../../assets/images/error.jpg'
            ], {duration: 5000, fade: 500, centeredY: false} );

        });
    }

    ngOnDestroy(): void {
        location.reload();
    }
}
