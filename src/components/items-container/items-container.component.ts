import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { ItemComponent } from "../item/item.component";
import { Client, Item } from "../../models/item.model";
import { CLIENTS } from "../../constants/clients";

@Component({
    selector: "a-items-container",
    templateUrl: "./items-container.component.html",
    styleUrls: ["./items-container.component.scss"],
    imports: [ItemComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemsContainerComponent implements OnChanges, AfterViewInit {
    @ViewChild('container') container: ElementRef<any> | undefined;
    @ViewChild('swiper') swiper: ElementRef<any> | undefined;
    @Input() clientIndex: number = 0;
    client: Client = CLIENTS[this.clientIndex];
    
    ngAfterViewInit(): void {
        this.updateClient();
    }

    ngOnChanges(changes: SimpleChanges): void {   
        this.updateClient();
    }
    
    updateClient(): void {
        this.clientIndex = this.clientIndex ? this.clientIndex : 0;
        this.client = CLIENTS[this.clientIndex];
        this.container?.nativeElement.style.setProperty('--oikos-background-color', this.client.secondaryColor);
        this.swiper?.nativeElement.style.setProperty('--swiper-theme-color', this.client.primaryColor);

    }

    selectedItem(item: Item) {
        console.log("Item clicked:", item);
        alert(`You want to learn more about: ${item.title}`);
    }
}