import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {
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
