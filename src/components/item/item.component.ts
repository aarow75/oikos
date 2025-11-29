import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Item } from "../../models/item.model";

@Component({
    selector: "a-item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
    @Input() item: Item | undefined;
    @Output() onItemClick = new EventEmitter<Item | undefined>();

    onItemClickHandler() {
        this.onItemClick.emit(this.item);
    }
}