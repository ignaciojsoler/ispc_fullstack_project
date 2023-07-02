import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private router: Router){}
  
  loginForm= this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    }
  )

  // Propiedades getter para la vista:
  get Email() {
    return this.loginForm.controls.email;
  }
  get Password() {
    return this.loginForm.controls.password;
  }

  login() {
    if(this.loginForm.valid) {
      console.log("Llamar al servicio de Login");
      this.router.navigateByUrl('/home');
      this.loginForm.reset();
    }
    else
    {
      console.log("Error al ingresar los datos");
      this.loginForm.markAllAsTouched();
    }
  }
}
