import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  user_type = 'cliente';

  setUserType(type: string) {
    this.user_type = type;
  }

  signupForm= this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      priceperhour: ['', [Validators.required]]
    }
  )

  // Propiedades getter para la vista:
  get Name() {
    return this.signupForm.controls.name;
  }
  get Surname() {
    return this.signupForm.controls.surname;
  }
  get Email() {
    return this.signupForm.controls.email;
  }
  get Password() {
    return this.signupForm.controls.password;
  }
  get Confirmpassword() {
    return this.signupForm.controls.confirmpassword;
  }
  get Address() {
    return this.signupForm.controls.address;
  }
  get City() {
    return this.signupForm.controls.city;
  }
  get Province() {
    return this.signupForm.controls.province;
  }
  get Profession() {
    return this.signupForm.controls.profession;
  }
  get Priceperhour() {
    return this.signupForm.controls.priceperhour;
  }

  signup() {
    if(this.signupForm.valid) {
      console.log("Enviar al servidor");
      this.router.navigate(this.user_type === 'cliente' ? ['/login'] : ['/pagos'])
      this.signupForm.reset();
    }
    else
    {
      console.log("Error al ingresar los datos");
      this.signupForm.markAllAsTouched();
    }
  } 
}


