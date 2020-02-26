import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit{

  @Input() public data: any;

  @Input() isEven: boolean;

  @Output() remove = new EventEmitter();

  public color = 'red';

  constructor() { }

  ngOnInit(): void {
    console.log(`La peli ${this.data.name} es ${this.isEven ? 'par' : 'impar'}`);
    if (!this.isEven) {
      this.color = '#fff';
    }
    // throw new Error('Method not implemented.');
  }

  eliminarFilm() {
    this.remove.emit(this.data);
  }

}
