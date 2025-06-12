import { Routes } from "@angular/router";
import { CountryLayoutComponent } from "./layouts/country-layout/country-layout.component";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";
import { ByCountryPageComponent } from "./pages/by-country-page/by-country-page.component";
import { ByRegionPageComponent } from "./pages/by-region-page/by-region-page.component";
import { CountryPageComponent } from "./pages/country-page/country-page.component";

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
                component: ByCountryPageComponent,
            },
            {
                path: "by-region",
                component: ByRegionPageComponent,
            },
            {
                path: "by/:id",
                component: CountryPageComponent,
            },
            {
                path: "**", //esta re direccion se hace, para que no se visualice el layout u otras rutas que no tengan componente
                redirectTo: "by-capital",
            },
        ],
    },
];
export default countryRoutes; // se debe añadir esta linea para que app.routes la pueda leer.
