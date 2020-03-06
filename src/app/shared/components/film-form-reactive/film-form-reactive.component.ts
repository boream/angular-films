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

  genders: string[] = ['Comedia', 'Terror', 'Acción', 'Aventura'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    debugger
    // this.formGroup = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.minLength(4)]],
    //   gender: ['', Validators.required],
    //   image: ['', [Validators.required, this.validateUrl]],
    //   imdbUrl: ['', [Validators.required, this.validateUrl]],
    // }/*, { validators: this.sameUrl }*/);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // a la raul
    debugger
    if (this.film) {
      this.formGroup = this.formBuilder.group({
        name: [this.film.name, [Validators.required,
        Validators.minLength(4)]],
        gender: [this.film.gender, Validators.required],
        image: [this.film.image, [Validators.required, this.validateUrl]],
        imdbUrl: [this.film.imdbUrl, [Validators.required,
        this.validateUrl]],
        });
    } else {
      this.formGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        gender: ['', Validators.required],
        image: ['', [Validators.required, this.validateUrl]],
        imdbUrl: ['', [Validators.required, this.validateUrl]],
      }/*, { validators: this.sameUrl }*/);
    }
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
