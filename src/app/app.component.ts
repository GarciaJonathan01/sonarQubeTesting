import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { ImagenesComponent } from "./imagenes/imagenes.component";

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,ImagenesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Frutas Tropicales';
}
