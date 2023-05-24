import {Component, Input} from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showFiller = false;
  @Input() item = '';
  saludo = "Welcome, "
  constructor(public authService: AuthService) {
  }
}
