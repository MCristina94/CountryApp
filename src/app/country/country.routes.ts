import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: ByCapitalPageComponent,
  },
];
export default countryRoutes; // se debe añadir esta linea para que app.routes la pueda leer.
