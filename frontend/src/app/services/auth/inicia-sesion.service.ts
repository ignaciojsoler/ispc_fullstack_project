import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IniciaSesionService {

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router) {
      this.form= this.formBuilder.group ({ 
        password: ['', [Validators.required, Validators.minLength(8)]],
        email:['', [Validators.required, Validators.required]],
      })
  }
  
  onSubmit(event:Event, usuario:Usuario): void {
    event.preventDefault;
    this.authService.login(this.usuario).subscribe(
      data => {
        console.log("DATA" + JSON.stringify(data));
        this.router.navigate(['home/']);
      },  
      error => {
        this.error = error;
      }
    );
  }
}
