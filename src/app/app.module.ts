import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FilmService} from './film.service';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactsPageComponent,
    AboutUsPageComponent,
    NotFoundPageComponent,
    FilmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'contacts',
        component: ContactsPageComponent
      },
      {
        path: 'about',
        component: AboutUsPageComponent
      },
      {
        path: 'film/:id',
        component: FilmComponent
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ])
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
