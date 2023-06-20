import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-user-item',
  templateUrl: './dashboard-user-item.component.html',
  styleUrls: ['./dashboard-user-item.component.css']
})


export class DashboardUserItemComponent {
  editingId: number | null = null;

  onEditProfesional(profesionalId: number) {
    this.editingId = profesionalId;
  }
  @Input() id: string = '';
  @Input() imagen: string = '';
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() descripcion: string = '';
  @Input() profesion: string[] = [''];
  @Input() ranking: string = '';
  @Input() email: string = '';
  borrarProfesional!: (id: string) => void;
}
