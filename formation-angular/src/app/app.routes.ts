import { Routes } from '@angular/router';
import { PageComponent } from '../components/exercice-1/page/page.component';
import { ConnectionComponent } from '../components/exercice-7/connection/connection.component';
import { RouteIdComponent } from '../components/route-id/route-id.component';
import { PermissionComponent } from '../components/exercice-7/permission/permission.component';
import { RoleSwitchComponent } from '../components/exercice-7/role-switch/role-switch.component';
import { HomeComponent } from '../components/exercice-9/home/home.component';
import { AboutComponent } from '../components/exercice-9/about/about.component';
import { UserComponent } from '../components/exercice-9/user/user.component';
import { DashboardComponent } from '../components/exercice-9/dashboard/dashboard.component';
import { SettingsComponent } from '../components/exercice-9/settings/settings.component';
import { StatsComponent } from '../components/exercice-9/stats/stats.component';
import { UserSettingsComponent } from '../components/exercice-9/user-settings/user-settings.component';
import { UserInfoComponent } from '../components/exercice-2/user-info/user-info.component';

export const routes: Routes = [
    {
        path: 'first', component: PageComponent, children: [
            { path: 'third', component: PermissionComponent },
            { path: 'fourth', component: RoleSwitchComponent }
        ]
    },
    { path: 'second', component: ConnectionComponent },
    { path: 'route/:id/:name', component: RouteIdComponent },

    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    {
        path: 'user/:id', component: UserComponent, children: [
            { path: 'settings', component: UserSettingsComponent },
            { path: 'info', component: UserInfoComponent }
        ]
    },

    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: 'settings', component: SettingsComponent },
            { path: 'stats', component: StatsComponent }
        ]
    }
];
