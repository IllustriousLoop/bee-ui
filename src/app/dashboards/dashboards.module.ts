import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardsRoutingModule} from './dashboards-routing.module';
import {DashboardsComponent} from './dashboards.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import { DrawerComponent } from './header/drawer/drawer.component';
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    DashboardsComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    DrawerComponent,
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ]
})
export class DashboardsModule {
}
