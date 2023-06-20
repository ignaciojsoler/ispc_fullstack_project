import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// El servicio UsuarioService nos permitirá acceder y manipular los datos

export class Usuario { // Petición Post
  nombre:string="";
  apellido:string="";
  email:string="";
  profesion:string="";
  matricula:string="";
  descripcion:string="";
  telefono:string="";
  direccion:string="";
  ciudad:string="";
  provincia:string="";
  password:string="";
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService { // Petición Post

  url='http://localhost:3000/trabajadores';

  constructor(private http:HttpClient) {
    console.log("Servicio Usuarios está corriendo");
  }

  onCrearUsuario(usurio:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usurio);
  }
}
