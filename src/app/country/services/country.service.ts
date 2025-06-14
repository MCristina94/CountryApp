import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { RESTCountry } from "../interfaces/rest-countries.interface";
import { map, Observable, catchError, throwError, delay } from "rxjs";
import { Country } from "../interfaces/country.interface";
import { CountryMApper } from "../mappers/country.mapper";

const API_URL = "https://restcountries.com/v3.1";

@Injectable({
    providedIn: "root",
})
export class CountryService {
    private http = inject(HttpClient);

    searchByCapital(query: string): Observable<Country[]> {
        query = query.toLowerCase();

        return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
            map((resp) => CountryMApper.mapRestCountryToCountryArray(resp)),
            catchError((error) => {
                return throwError(
                    () =>
                        new Error(
                            `No se pudo obtener países con la consulta ${query}`
                        )
                );
            })
        );
    }

    searchByCountry(query: string): Observable<Country[]> {
        query = query.toLowerCase();

        return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
            map((resp) => CountryMApper.mapRestCountryToCountryArray(resp)),

            catchError((error) => {
                return throwError(
                    () =>
                        new Error(
                            `No se pudo obtener país con la consulta ${query}`
                        )
                );
            })
        );
    }

    searchCountryByCode(code: string): Observable<Country | undefined> {
        return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
            map((resp) => CountryMApper.mapRestCountryToCountryArray(resp)),
            map((countries) => countries.at(0)),
            catchError((error) => {
                return throwError(
                    () =>
                        new Error(
                            `No se pudo obtener país con ese codigo ${code}`
                        )
                );
            })
        );
    }
}
