import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, MinLengthValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  name = new FormControl ('', Validators.required);
  /*surname = new FormControl ('');*/
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl ('', [Validators.required, Validators.minLength(8)],);
  /*
  address = new FormControl ('');
  city = new FormControl ('');
  province = new FormControl ('');
  country = new FormControl ('');
  profession = new FormControl ('');
  priceperhour = new FormControl ('');
  */


  

  user_type: String | undefined;

  constructor(private router: Router) {
    this.user_type = 'cliente';
  }

  setUserType(type: string) {
    this.user_type = type;
  }

  handleSubmit() {
    this.router.navigate(this.user_type === 'cliente' ? ['/login'] : ['/pagos'])
     
  }
}
