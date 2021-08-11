import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}
  saveRecipe() {
    this.dataStorageService.storeRecipe().subscribe((resposeData) => {
      console.log(resposeData);
    });
  }

  getRecipe() {
    this.dataStorageService.fetchRecipe().subscribe();
  }
}
