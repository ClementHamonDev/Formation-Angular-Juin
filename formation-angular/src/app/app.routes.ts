import { Routes } from '@angular/router';
import { PageComponent } from '../components/exercice-1/page/page.component';
import { ConnectionComponent } from '../components/exercice-7/connection/connection.component';
import { RouteIdComponent } from '../components/route-id/route-id.component';
import { PermissionComponent } from '../components/exercice-7/permission/permission.component';
import { RoleSwitchComponent } from '../components/exercice-7/role-switch/role-switch.component';

export const routes: Routes = [
    {path:'first', component: PageComponent, children: [
        {path: 'third', component:PermissionComponent},
        {path:'fourth', component:RoleSwitchComponent}
    ]},
    {path : 'second', component: ConnectionComponent},
    {path: 'route/:toto', component: RouteIdComponent}
];
