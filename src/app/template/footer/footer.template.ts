import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'footer-template',
    templateUrl: 'footer.template.html'
})

export class FooterTemplateComponent implements OnInit, OnDestroy {
    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {
        console.log('test');
    }
}
