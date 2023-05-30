import {Component} from '@angular/core';
import {Router} from '@angular/router';
import axios from 'axios';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {AuthService} from "../../auth.service";
import {environment} from "../../../environment/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }


  async submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      try {
        const login = {
          email: formData.email,
          password: formData.password
        }
        const {data} = await axios.post(environment.apiKey + "/login", login);
        if (data != -1) {
          const res = await axios.get(environment.apiKey + "/user?id=" + data);
          const userData = {
            id: res.data[0],
            email: res.data[1],
            password: res.data[2],
            role: res.data[3],
            name: `${res.data[4]} ${res.data[6]}`,
            firstName: res.data[4],
            middleName: res.data[5],
            surname: res.data[6],
            dateOfBirth: res.data[7]
          }
          this.authService.setAuthenticated(true);
          this.authService.setUserData(userData);
          await this.router.navigate(['/dash/user']);
        }
      } catch (e) {

      }
    }
  }
}
