import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardUser implements CanActivate, CanActivateChild {

    constructor(private auth: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        
        if (this.auth.isAuthenticated() && this.auth.getRole() === 'user')
        {
            return of(true)
        } else if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            })
            return of(false)
        } else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessUserDenied: true
                }
            })
            return of(false)
        }

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state)
    }
}