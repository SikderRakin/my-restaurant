import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
interface AuthResponseData {
  localId: string;
  expiresIn: string;
  refreshToken: string;
  email: string;
  idToken: string;
}
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  singUp(email: string, password: string) {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5BFjkei9NXcUX9kTzSsyybf02PZWbsUY",
      {
        email: email,
        password: password,
        returnSecureToken: true,
      },
      httpOptions
    );
  }
}
