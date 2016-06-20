/**
 * Created by btrabon on 6/19/16.
 */

import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";

import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
    selector: 'web-dev-jobs',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Login']}
])
export class AppComponent {}