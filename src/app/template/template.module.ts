import { NgModule } from '@angular/core';
import { FooterTemplateComponent } from './footer/footer.template';
import { HeaderTemplateComponent } from './header/header.template';

@NgModule({
    imports: [],
    exports: [FooterTemplateComponent, HeaderTemplateComponent],
    declarations: [FooterTemplateComponent, HeaderTemplateComponent],
    providers: [],
})
export class TemplateModule { }
