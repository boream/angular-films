import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  @Output() save = new EventEmitter();

  genders: string[] = ['Comedia', 'Terror', 'Acción', 'Aventura']

  constructor() { }

  ngOnInit() {
  }

  onSave(form) {
    this.save.emit(form.value);
    form.reset();
  }

}
