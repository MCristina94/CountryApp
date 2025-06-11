import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink], //routerlink sirve para asignarle al boton a que ruta dirigirse
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
