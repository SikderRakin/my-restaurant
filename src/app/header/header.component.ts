import { OnDestroy, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription, UnsubscriptionError } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthentication = false;

  userSub: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private _auth: AuthService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  saveRecipe() {
    this.dataStorageService.storeRecipe().subscribe((resposeData) => {
      console.log(resposeData);
    });
  }
  ngOnInit() {
    this.userSub = this._auth.user.subscribe((user) => {
      this.isAuthentication = !!user;
    });
  }
  getRecipe() {
    this.dataStorageService.fetchRecipe().subscribe();
  }
  logOut() {
    this._auth.logOut();
  }
}
