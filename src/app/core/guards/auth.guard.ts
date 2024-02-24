import { inject } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { AuthService } from "@core/services/auth.service";
import { Observable } from "rxjs";

export const authGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
):
	| Observable<boolean | UrlTree>
	| Promise<boolean | UrlTree>
	| boolean
	| UrlTree => {
	return inject(AuthService).isLoggedIn()
		? true
		: inject(Router).createUrlTree(["/signin"]);
};
