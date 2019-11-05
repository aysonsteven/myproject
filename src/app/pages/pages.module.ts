import { NgModule } from '@angular/core';
import { HomePageComponent } from './home/home.page';
import { AboutPageComponent } from './about/about.page';
import { NotfoundPageComponent } from './not-found/notfound.page';
import { UtilService } from '../utils/jquery-utils';
import { ServicesPageComponent } from './services/services.page';
import { PortfolioPageComponent } from './portfolio/portfolio.page';
import { BlogPageComponent } from './blogs/blog.page';
import { ContactPageComponent } from './contact/contact.page';


@NgModule({
    imports: [],
    exports: [
        HomePageComponent,
        AboutPageComponent,
        NotfoundPageComponent,
        ServicesPageComponent,
        PortfolioPageComponent,
        BlogPageComponent,
        ContactPageComponent
    ],
    declarations: [
        HomePageComponent,
        AboutPageComponent,
        NotfoundPageComponent,
        ServicesPageComponent,
        PortfolioPageComponent,
        BlogPageComponent,
        ContactPageComponent
    ],
    providers: [UtilService],
})
export class PagesModule { }
