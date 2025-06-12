import { Component, input } from "@angular/core";
import { Country } from "../../interfaces/country.interface";

@Component({
    selector: "country-table-list",
    imports: [],
    templateUrl: "./table-list.component.html",
})
export class TableListComponent {
    countries = input.required<Country[]>();
}
