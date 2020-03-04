import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-film-form-reactive',
  templateUrl: './film-form-reactive.component.html',
  styleUrls: ['./film-form-reactive.component.scss']
})
export class FilmFormReactiveComponent implements OnInit {

  @Output() save = new EventEmitter();

  formGroup: FormGroup;

  genders: string[] = ['Comedia', 'Terror', 'Acción', 'Aventura'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      gender: ['', Validators.required],
      image: ['', Validators.required],
      imdbUrl: ['', Validators.required],
    });
  }

  onSave(form) {
    this.save.emit(form.value);
    form.reset();
  }
}
