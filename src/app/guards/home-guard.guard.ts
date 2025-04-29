import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogOutService } from '../shared/services/logout.service';

@Injectable({ 
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor (private router: Router, private logOutService: LogOutService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('admin')) {
        return true;
      } else {
        this.router.navigate(['auth/login']);
        return false;
      }
    }
}
