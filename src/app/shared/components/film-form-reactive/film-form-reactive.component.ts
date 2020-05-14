import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

const URL_VALID =
  /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;


@Component({
  selector: 'app-film-form-reactive',
  templateUrl: './film-form-reactive.component.html',
  styleUrls: ['./film-form-reactive.component.scss']
})
export class FilmFormReactiveComponent implements OnInit, OnChanges {

  @Input() film;

  @Output() save = new EventEmitter();

  formGroup: FormGroup;

  genders = [
    {
      key: 'comedy',
      option: 'Comedia'
    },
    {
      key: 'terror',
      option: 'Terror'
    },
    {
      key: 'action',
      option: 'Acción'
    },
    {
      key: 'fantastic',
      option: 'Fantasía'
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formGroup = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.minLength(4)]],
    //   gender: ['', Validators.required],
    //   image: ['', [Validators.required, this.validateUrl]],
    //   imdbUrl: ['', [Validators.required, this.validateUrl]],
    // }/*, { validators: this.sameUrl }*/);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // a la raul
    if (this.film) {
      this.formGroup = this.formBuilder.group({
        name: [this.film.name, [Validators.required, Validators.minLength(4)]],
        gender: [this.film.gender, Validators.required],
        year: [this.film.year, Validators.required],
        image: [this.film.image, [Validators.required, this.validateUrl]],
        imdbUrl: [this.film.imdbUrl, [Validators.required,
        this.validateUrl]],
        });
    } else {
      this.formGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        gender: ['', Validators.required],
        year: ['', Validators.required],
        image: ['', [Validators.required, this.validateUrl]],
        imdbUrl: ['', [Validators.required, this.validateUrl]],
      }/*, { validators: this.sameUrl }*/);
    }
  }

  onSave(form) {
    const update = Object.assign({}, this.film, form.value);
    this.save.emit(update);
    // form.reset();
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
