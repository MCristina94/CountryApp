import { Component, inject, signal } from "@angular/core";
import { TableListComponent } from "../../components/table-list/table-list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryService } from "../../services/country.service";
import { Country } from "../../interfaces/country.interface";

@Component({
    selector: "app-by-capital-page",
    imports: [TableListComponent, SearchInputComponent],
    templateUrl: "./by-capital-page.component.html",
})
export class ByCapitalPageComponent {
    countryService = inject(CountryService); // traigo la informacion consumida en el service
    isLoading = signal(false);
    isError = signal<string | null>(null);
    countries = signal<Country[]>([]); //Country es la interface que transformo la info de RESTCountry interface
    onSearch(query: string) {
        if (this.isLoading()) return;
        this.isLoading.set(true);
        this.isError.set(null);

        this.countryService.searchByCapital(query).subscribe({
            next: (resp) => {
                this.isLoading.set(false);
                this.countries.set(resp);
            },
            error: (err) => {
                this.isLoading.set(false);
                this.countries.set([]);
                this.isError.set(err);
            },
        });
    }
}
