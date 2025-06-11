import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/country-layout/country-layout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**', //esta re direccion se hace, para que no se visualice el layout u otras rutas que no tengan componente
        redirectTo: 'by-capital',
      },
    ],
  },
];
export default countryRoutes; // se debe añadir esta linea para que app.routes la pueda leer.
