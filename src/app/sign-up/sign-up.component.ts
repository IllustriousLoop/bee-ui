import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUPComponent {
  role = [
    {
      value: 'admin',
    },
    { value: 'ordinary' },
  ];
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
}
