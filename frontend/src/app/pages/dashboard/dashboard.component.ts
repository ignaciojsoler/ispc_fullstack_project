import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  editingId: number | null = null;

  profesionales: any;
  mostrarProfesionales: boolean = true;

  constructor(private profesionalService: ProfesionalService) { }

  ngOnInit(): void {
    this.recuperarProfesionales();
  }

  recuperarProfesionales() {
    this.profesionalService.obtener().subscribe((resultado) => {
      console.log(resultado);
      this.profesionales = resultado;
    });
  }
  async borrarProfesional(id: string) {
    this.profesionalService.borrar(id).subscribe((resultado) => {
      console.log(resultado);
      this.profesionales = resultado;
      this.recuperarProfesionales()
    })
  };

  onEditProfesional(profesionalId: number) {
    if (this.editingId !== profesionalId ) this.editingId = profesionalId;
    else if (this.editingId === profesionalId) this.editingId = null
  }

}
