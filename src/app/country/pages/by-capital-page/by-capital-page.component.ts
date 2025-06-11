import { Component } from "@angular/core";
import { TableListComponent } from "../../components/table-list/table-list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";

@Component({
    selector: "app-by-capital-page",
    imports: [TableListComponent, SearchInputComponent],
    templateUrl: "./by-capital-page.component.html",
})
export class ByCapitalPageComponent {
    onSearch(value: string) {
        console.log(value);
    }
}
