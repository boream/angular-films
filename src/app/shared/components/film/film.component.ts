import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {

  @Input() public data: any;

  @Output() remove = new EventEmitter();

  public isDisabled = true;

  constructor() { }

  eliminarFilm() {
    this.remove.emit(this.data);
  }

}
