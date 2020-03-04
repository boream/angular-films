import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFormReactiveComponent } from './film-form-reactive.component';

describe('FilmFormReactiveComponent', () => {
  let component: FilmFormReactiveComponent;
  let fixture: ComponentFixture<FilmFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
