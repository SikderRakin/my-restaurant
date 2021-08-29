import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: `app-auth`,
  templateUrl: `./auth.component.html`,
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  constructor(private _userLogin: AuthService, private router: Router) {}
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
      this.router.navigate(["/recipe"]);
    }

    authObs.subscribe(
      (res) => {
        console.log(res);
      },
      (errorRes) => {
        console.log(errorRes);
      }
    );
  }
}
