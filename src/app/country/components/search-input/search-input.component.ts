import { Component, input, output } from "@angular/core";

@Component({
    selector: "country-search-input",
    imports: [],
    templateUrl: "./search-input.component.html",
})
export class SearchInputComponent {
    placeholder = input("Buscar"); //este seria el valor por defecto, si no le envio un placeholder personalizado
    value = output<string>(); //permite enviar el evento al componente padre
}
