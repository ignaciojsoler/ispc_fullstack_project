import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { IniciaSesionService } from 'src/app/services/auth/inicia-sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

}
