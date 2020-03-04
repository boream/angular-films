import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() public data: any;

  @Input() isEven: boolean;

  @Output() remove = new EventEmitter();

  public color = '#e0e0e0';
  public isRomance = false;


  constructor() { }

  ngOnInit(): void {

    if (!this.isEven) {
      this.color = '#fff';
    }

    this.isRomance = this.data.gender === 'Romance';
    // throw new Error('Method not implemented.');
  }

  eliminarFilm() {
    this.remove.emit(this.data);
  }

}
