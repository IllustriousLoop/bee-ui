import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardsComponent} from './dashboards.component';
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  { path: '',   redirectTo: '/dash/user', pathMatch: 'full' },
  { path: "user", component: UserComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule {
}
