import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from 'src/app/utils/jquery-utils';

@Component({
    templateUrl: 'blog.page.html',
    styleUrls: ['blog.page.scss']
})

export class BlogPageComponent implements OnInit, OnDestroy {
    constructor(private util: UtilService) { }

    ngOnInit() {
        this.util.dom(document).ready(() => {
            'use strict';
            this.util.backstretch([
                'http://placehold.it/800x600',
                'http://placehold.it/800x600',
                'http://placehold.it/800x600'
            ], {duration: 5000, fade: 500, centeredY: false} );
            this.util._this('#mapwrapper').gMap({ controls: false,
                scrollwheel: false,
                markers: [{
                    latitude: 40.7566,
                    longitude: -73.9863,
                icon: { image: './../../../assets/images/marker.png',
                    iconsize: [44,44],
                    iconanchor: [12,46],
                    infowindowanchor: [12, 0] } }],
                icon: {
                    image: './../../../assets/images/marker.png',
                    iconsize: [26, 46],
                    iconanchor: [12, 46],
                    infowindowanchor: [12, 0] },
                latitude: 40.7566,
                longitude: -73.9863,
                zoom: 14 });
        });
    }

    ngOnDestroy() {
        location.reload();
    }
}
