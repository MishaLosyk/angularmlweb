import { Component } from '@angular/core';
import {FilmService} from '../film.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  title: string;
  year: number;
  plot: string;
  genre: string;
  imgSrc: string;
  id: string;

  constructor(
    private filmService: FilmService,
    activeRouter: ActivatedRoute,
    private router: Router) {
    activeRouter.params.subscribe((params)=> {
      this.id = params['id'];
      filmService.getFilmByID(this.id).subscribe((resp) => {
        this.title = resp['Title'];
        this.year = +resp['Year'];
        this.plot = resp['Plot'];
        this.genre = resp['Genre'];
        this.imgSrc = resp['Poster'];
        this.id = resp['ImdbID'];
      });
    });

  }

  comeBack() {
    this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
  }


}
