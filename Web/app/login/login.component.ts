/**
 * Created by btrabon on 6/19/16.
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {AuthService} from "../services/auth.service";

@Component({
    templateUrl: '../app/login/login.html',
    providers: [AuthService]
})

export class LoginComponent {
    localUser = {
        username: '',
        password: ''
    }

    constructor(private _service: AuthService, private _router: Router) {

    }

    login() {
        this._service.loginfn(this.localUser).then((res) => {
            if (res) this._router.navigate(['Dashboard']);
            else console.log(res);
        })
    }

    clearfields() {
        this.localUser.username = '';
        this.localUser.password = '';
    }
}