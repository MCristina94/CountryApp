import { Component } from "@angular/core";
import { TableListComponent } from "../../components/table-list/table-list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";

@Component({
    selector: "app-by-country-page",
    imports: [TableListComponent, SearchInputComponent],
    templateUrl: "./by-country-page.component.html",
})
export class ByCountryPageComponent {}
