import {Component} from '@angular/core';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  constructor(public authService: AuthService) {
  }
}
