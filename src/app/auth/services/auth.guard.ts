import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { UserSevice } from "./user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userSevice: UserSevice, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userSevice.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"], {
        queryParams: {
          accessDenied: true
        }
      });
      return false;
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.canActivate(childRoute, state);
  }
}
