import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  role = [
    {
      value: 'admin',
    },
    { value: 'ordinary' },
  ];
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
}
