import { Component, input } from "@angular/core";
import { Country } from "../../interfaces/country.interface";
import { DecimalPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "country-table-list",
    imports: [DecimalPipe, RouterLink],
    templateUrl: "./table-list.component.html",
})
export class TableListComponent {
    countries = input.required<Country[]>();
}
