import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: `app-auth`,
  templateUrl: `./auth.component.html`,
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  constructor(private _userLogin: AuthService) {}
  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  submit() {
    this._userLogin
      .singUp(this.form.get("username").value, this.form.get("password").value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
