import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor() {
    }

    canActivate(): boolean {
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }
}
