import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import axios from "axios";
import {environment} from "../../../environment/environment";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    middleName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    date: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl('', [Validators.required])
  })

  roles = [
    {value: 'admin'},
    {value: 'ordinary'},
  ];

  constructor(private fb: FormBuilder, private router: Router) {
  }

  async submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      const idInfo = Math.floor(Math.random() * (10000000 - 1));
      const info = {
        id: idInfo,
        firstName: formData.name,
        dateOfBirth: formData.date,
        middleName: formData.middleName,
        surname: formData.surname,
      }

      try {
        const res = await axios.post(environment.apiKey + "/user/info", info);
        if (res.data === true) {
          const user = {
            id: Math.floor(Math.random() * (10000000 - 1)),
            email: formData.email,
            password: formData.password,
            role: formData.role,
            information: idInfo,
          }
          const res2 = await axios.post(environment.apiKey + "/user", user);
          if (res2.data === true) {
            await this.router.navigate(['/auth/login']);
          }
        }
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }
  }
}
