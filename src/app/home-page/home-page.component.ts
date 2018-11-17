import { Component } from '@angular/core';
import {FilmService} from '../film.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(public filmsService: FilmService) {}

  search(q) {
    this.filmsService.getFilmByName(q);
  }

}
