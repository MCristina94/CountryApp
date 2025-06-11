import { Routes } from "@angular/router";
import { CountryLayoutComponent } from "./layouts/country-layout/country-layout.component";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";

export const countryRoutes: Routes = [
    {
        path: "",
        component: CountryLayoutComponent,
        children: [
            {
                path: "by-capital",
                component: ByCapitalPageComponent,
            },
            {
                path: "by-country",
                component: ByCapitalPageComponent, //pend cambiar
            },
            {
                path: "by-region",
                component: ByCapitalPageComponent, //pend cambiar
            },
            //byCountryPage - crear la ruta, los componentes, modificar los botones para que el menu funcione
            //solo lleva la tabla
            //byRegionPage
            {
                path: "**", //esta re direccion se hace, para que no se visualice el layout u otras rutas que no tengan componente
                redirectTo: "by-capital",
            },
        ],
    },
];
export default countryRoutes; // se debe añadir esta linea para que app.routes la pueda leer.
