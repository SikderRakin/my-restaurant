import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";

import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformID
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      this.authService.autoLogin();
    }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
