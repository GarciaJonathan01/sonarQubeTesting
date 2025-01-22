import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagenes',
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.css'
})
export class ImagenesComponent {

  mg=[
    { src: 'imge/mango.avif', alt: 'Mango' },
    { src: 'imge/banano.avif', alt: 'Banano' },
    { src: 'imge/coco.jpg', alt: 'Coco' },
    { src: 'imge/pitahaya.jpg', alt: 'Pitahaya' },
    { src: 'imge/papaya.jpg', alt: 'Papaya' },
    { src: 'imge/pinia.avif', alt: 'Pina' }
  ]
}
