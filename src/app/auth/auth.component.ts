import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {
  AlertComponent,
  ConfirmDialogModel,
} from "../shared/alert/alert.component";

import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: `app-auth`,
  templateUrl: `./auth.component.html`,
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  @Output() error = new EventEmitter<string>();
  constructor(
    private _userLogin: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });
  isLoginMode: boolean = true;

  swtichMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  submit() {
    let authObs: Observable<AuthResponseData>;
    if (!this.isLoginMode) {
      authObs = this._userLogin.singUp(
        this.form.get("username").value,
        this.form.get("password").value
      );
    } else {
      authObs = this._userLogin.singIn(
        this.form.get("username").value,
        this.form.get("password").value
      );
    }

    authObs.subscribe(
      (res) => {
        this.router.navigate(["/recipe"]);
        console.log(res);
      },
      (errorRes) => {
        this.error.emit(errorRes);

        const message = errorRes;
        const title = "Login Error";

        const dialogData = new ConfirmDialogModel(title, message);

        const dialogRef = this.dialog.open(AlertComponent, {
          maxWidth: "400px",
          data: dialogData,
        });
        //This is for getting the response from dialogbox (confirm/not)
        // dialogRef.afterClosed().subscribe(dialogResult => {
        //   this.result = dialogResult;
        // });
      }
    );
  }
}
