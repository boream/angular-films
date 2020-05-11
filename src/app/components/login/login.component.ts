import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onLogin(form) {
    // const update = Object.assign({}, this.film, form.value);
    console.log(form.value);
    this.http.post('http://localhost:3000/auth/login', form.value).subscribe(response => {
      debugger
      console.log(response);
    })
    
  }

}
