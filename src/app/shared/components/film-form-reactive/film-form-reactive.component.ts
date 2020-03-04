import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

const URL_VALID =
  /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;


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
      image: ['', [Validators.required, this.validateUrl]],
      imdbUrl: ['', [Validators.required, this.validateUrl]],
    }/*, { validators: this.sameUrl }*/);
  }

  onSave(form) {
    this.save.emit(form.value);
    form.reset();
  }

  private validateUrl(control: AbstractControl): { [key: string]: any } {
    const url = control.value;
    const correct = URL_VALID.test(url);
    return !correct ? { url: true } : null;
  }

  /* Cross Field Validation: https://angular.io/guide/form-validation#cross-field-validation
  private sameUrl(group: FormGroup): { [key: string]: any } {
    const imdb = group.get('imdbUrl').value;
    const image = group.get('image').value;
    return imdb === image ? null : { sameUrl: true };
  }*/
}
