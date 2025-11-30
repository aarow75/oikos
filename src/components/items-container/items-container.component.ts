import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from "@angular/core";
import { ItemComponent } from "../item/item.component";
import { Client, Item } from "../../models/item.model";
import { Observable, Subject, takeUntil } from "rxjs";
import { ClientService } from "../../services/client.service";

@Component({
    selector: "a-items-container",
    templateUrl: "./items-container.component.html",
    styleUrls: ["./items-container.component.scss"],
    imports: [ItemComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemsContainerComponent implements OnChanges, AfterViewInit, OnDestroy {
    @ViewChild('container') container: ElementRef<any> | undefined;
    @ViewChild('swiper') swiper: ElementRef<any> | undefined;
    @Input() clientIndex: number = 0;
    private destroy$ = new Subject<void>();
    private readonly clientService = inject(ClientService);
    client$: Observable<Client> = this.clientService.getClientByIndex(this.clientIndex);
    client!: Client;

    ngAfterViewInit(): void {
        this.updateClient();
    }

    ngOnChanges(changes: SimpleChanges): void {   
        this.updateClient();
    }
    
    updateClient(): void {
        console.log("Updating client to index:", this.clientIndex);
        this.clientService.getClientByIndex(this.clientIndex).pipe(takeUntil(this.destroy$)).subscribe(client => {
            this.client = client;
            this.container?.nativeElement.style.setProperty('--oikos-background-color', client.secondaryColor);
            this.swiper?.nativeElement.style.setProperty('--swiper-theme-color', client.primaryColor);
        });
    }

    selectedItem(item: Item) {
        console.log("Item clicked:", item);
        alert(`You want to learn more about: ${item.title}`);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}