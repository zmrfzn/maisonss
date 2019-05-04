import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:ProjectId', component: ProjectDetailsComponent },
  {
    path: 'home',

    redirectTo: '',

    pathMatch: 'full'

  }
  // ,
  // { path: '**', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    [RouterModule.forRoot(appRoutes,
      { enableTracing: true })],
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
