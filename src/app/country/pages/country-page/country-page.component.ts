import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-country-page",
    imports: [],
    templateUrl: "./country-page.component.html",
})
export class CountryPageComponent {
    countryCode = inject(ActivatedRoute).snapshot.params["code"];
}
