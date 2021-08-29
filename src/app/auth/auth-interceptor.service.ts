import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // take(1) operator take value for 1 time then unsubscribe
    //exhaustMap operator replace the return value with the subscribe value inside of it
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          console.log(user);
          return next.handle(req);
        }
        console.log(user);
        const modifiedReq = req.clone({
          params: new HttpParams().set("auth", user.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
