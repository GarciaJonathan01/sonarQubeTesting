import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pitahaya',
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './pitahaya.component.html',
  styleUrl: './pitahaya.component.css'
})
export class PitahayaComponent {
  nombreFruta: string = 'Pitahaya';
  descripcionFruta: string = 'Una fruta tropical dulce y jugosa.';
  pesoFruta: number = 1.0;
  mg = { src: 'imge/pitahaya.jpg', alt: 'pitahaya' };

  // Modo de edición
  editMode: boolean = false;

  // Alternar modo de edición
  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  // Guardar cambios y salir del modo edición
  saveChanges() {
    this.editMode = false;
    console.log('Datos actualizados:', {
      nombreFruta: this.nombreFruta,
      descripcionFruta: this.descripcionFruta,
      pesoFruta: this.pesoFruta
    });
  }

  // Eliminar información del mango
  eliminarFruta() {
    this.nombreFruta = '';
    this.descripcionFruta = '';
    this.pesoFruta = 0;
    console.log('Información eliminada, imagen preservada.');
  }
}
