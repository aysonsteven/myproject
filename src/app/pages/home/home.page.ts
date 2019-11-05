import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from 'src/app/utils/jquery-utils';
import { Subscription } from 'rxjs';
declare var $: any;
declare var jQuery: any;
@Component({
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePageComponent implements OnInit, OnDestroy {
    routerSubscription: Subscription;
    constructor(private util: UtilService) {
     }

    ngOnInit() {
        this.util.dom(document).ready(() => {
            'use strict';
            this.util.backstretch([
                './../../../assets/images/bg/bg1.jpg',
                './../../../assets/images/bg/bg2.jpg',
                './..../../assets/images/bg/bg3.jpg'
            ], {duration: 5000, fade: 500, centeredY: true} );
            this.util._this('#mapwrapper').gMap({ controls: false,
                     scrollwheel: false,
                     markers: [{
                          latitude: 40.7566,
                  longitude: -73.9863,
                      icon: { image: './../assets/images/marker.png',
                          iconsize: [44, 44],
                        iconanchor: [12, 46],
                        infowindowanchor: [12, 0] } }],
                      icon: {
                          image: './../assets/images/marker.png',
                         iconsize: [26, 46],
                          iconanchor: [12, 46],
                          infowindowanchor: [12, 0] },
                     latitude: 40.7566,
                     longitude: -73.9863,
                      zoom: 14 });
              });
     }

    ngOnDestroy(): void {
        location.reload();
    }
}
