import { Component, signal, WritableSignal } from '@angular/core';
import { ItemsContainerComponent } from "../components/items-container/items-container.component";

@Component({
  selector: 'app-root',
  imports: [ItemsContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  clientIndex: WritableSignal<number> = signal(0);
  
  updateClientIndex($event: Event) {
    const selectElement = $event.target as HTMLSelectElement;
    this.clientIndex.set(Number(selectElement.value));
    console.log("Client index updated to:", this.clientIndex());
  }
}
