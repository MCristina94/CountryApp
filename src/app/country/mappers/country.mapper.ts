import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMApper {
    //static RestCountry => Country
    static mapRestCountryToCountry(item: RESTCountry): Country {
        return {
            cca2: item.cca2,
            flag: item.flag,
            flagSVG: item.flags.svg,
            name: item.translations["spa"].common ?? "no Spanish Name",
            capital: item.capital.join(","),
            population: item.population,
            region: item.region,
            subRegion: item.subregion,
        };
    }
    //static RestCountry[] => Country[]
    static mapRestCountryToCountryArray(items: RESTCountry[]): Country[] {
        return items.map(this.mapRestCountryToCountry);
    }
}
