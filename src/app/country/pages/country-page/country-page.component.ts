import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CountryService } from "../../services/country.service";
import { Country } from "../../interfaces/country.interface";
import { NotFoundComponent } from "../../../shared/components/not-found/not-found.component";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-country-page",
    imports: [NotFoundComponent, NgIf],
    templateUrl: "./country-page.component.html",
})
export class CountryPageComponent {
    countryCode = inject(ActivatedRoute).snapshot.params["code"];
    countryService = inject(CountryService);
    isLoading = signal(false);
    isError = signal<string | null>(null);
    country = signal<Country | undefined>(undefined);

    constructor() {
        this.loadyCountry();
    }

    loadyCountry() {
        if (!this.countryCode) return;

        this.isLoading.set(true);
        this.isError.set(null);

        this.countryService.searchCountryByCode(this.countryCode).subscribe({
            next: (resp) => {
                console.log("Respuesta del país:", resp);
                this.isLoading.set(false);
                this.country.set(resp);
            },
            error: (err) => {
                this.isLoading.set(false);
                this.isError.set(err.message);
            },
        });
    }
}
