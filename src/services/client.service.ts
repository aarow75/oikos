import { Injectable } from "@angular/core";
import { CLIENTS } from "../constants/clients";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private clients = CLIENTS;

    getClientByIndex(index: number) {
        console.log("Fetching client at index:", index);
        return of(this.clients[index] || this.clients[0]);
    }
}