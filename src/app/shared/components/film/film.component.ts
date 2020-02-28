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
