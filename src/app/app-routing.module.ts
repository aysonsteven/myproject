import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page';
import { AboutPageComponent } from './pages/about/about.page';
import { NotfoundPageComponent } from './pages/not-found/notfound.page';
import { ServicesPageComponent } from './pages/services/services.page';
import { PortfolioPageComponent } from './pages/portfolio/portfolio.page';
import { BlogPageComponent } from './pages/blogs/blog.page';
import { ContactPageComponent } from './pages/contact/contact.page';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'portfolio', component: PortfolioPageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '**', redirectTo: 'page-not-found'},
  {path: 'page-not-found', component: NotfoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
