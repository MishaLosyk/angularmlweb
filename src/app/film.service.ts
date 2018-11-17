import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: any[];
  constructor(private http: HttpClient) {}

  getFilmByName(query) {
    let url = `http://www.omdbapi.com/?apikey=991a7a0c&s=${query}`;
    this.http.get(url).subscribe((resp) => {
      this.films = resp['Search'];
    });
  }
  getFilmByID(id) {
    let url = `http://www.omdbapi.com/?apikey=991a7a0c&i=${id}`;
    return this.http.get(url);
  }
}
