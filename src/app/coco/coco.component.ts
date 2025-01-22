import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coco',
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './coco.component.html',
  styleUrl: './coco.component.css'
})
export class CocoComponent {
  nombreFruta: string = 'Coco';
  descripcionFruta: string = 'Una fruta tropical dulce y jugosa.';
  pesoFruta: number = 2.0;
  mg = { src: 'imge/coco.jpg', alt: 'coco' };

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
