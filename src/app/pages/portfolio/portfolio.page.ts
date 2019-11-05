import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    templateUrl: 'portfolio.page.html',
    styleUrls: ['portfolio.page.scss']
})

export class PortfolioPageComponent implements OnInit, OnDestroy {
    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {
        location.reload();
    }
}
