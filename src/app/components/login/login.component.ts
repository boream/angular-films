import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router, 
    @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onLogin(form) {
    // const update = Object.assign({}, this.film, form.value);
    console.log(form.value);
    this.http.post('http://localhost:3000/auth/login', form.value).subscribe((response: any) => {
      debugger
      this.storage.set('token', response.token);
      this.router.navigate(['/film']);
      console.log(response);
    })

  }

}
