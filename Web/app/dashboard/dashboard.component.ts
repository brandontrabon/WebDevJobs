/**
 * Created by btrabon on 6/19/16.
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
@Component({
    templateUrl: '../app/dashboard/dashboard.html'
})

export class DashboardComponent {
    constructor(private _router: Router) {

    }

    logout() {
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['Login']);
    }
}