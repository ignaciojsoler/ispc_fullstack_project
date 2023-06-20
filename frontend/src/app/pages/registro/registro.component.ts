import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  constructor(private router: Router) {
    this.user_type = 'cliente';
  }

  // constructor(private form: FormBuilder) { }
 
  name = new FormControl ('', [Validators.required]);
  surname = new FormControl ('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl ('', [Validators.required, Validators.minLength(8)]);
  repeatpassword = new FormControl ('', [Validators.required, Validators.minLength(8)]);
  address = new FormControl ('', Validators.required);
  city = new FormControl ('', [Validators.required]);
  province = new FormControl ('', [Validators.required]);
  profession = new FormControl ('', [Validators.required]); //ACA ME QUEDE, FALTA PASAR AL HTML
  priceperhour = new FormControl ('', [Validators.required]);
  user_type: String | undefined;
 
  setUserType(type: string) {
    this.user_type = type;
  }

  handleSubmit() {
    this.router.navigate(this.user_type === 'cliente' ? ['/login'] : ['/pagos'])
  }

  form: FormGroup = this.FormBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repeatpassword: ['', [Validators.required, Validators.minLength(8)]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    province: ['', [Validators.required]],
    profession: ['', [Validators.required]], //ACA ME QUEDE, FALTA PASAR AL HTML
    priceperhour: ['', [Validators.required]],
  })

  onEnviar(event: Event)
  {
    event?.preventDefault;
    if (this.form.valid) {
      alert ('Enviar al servidor')
    }
    else {
      this.form.markAllAsTouched();
    }
  }
}


