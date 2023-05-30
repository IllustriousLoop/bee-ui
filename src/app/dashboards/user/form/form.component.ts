import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import axios from "axios";
import {environment} from "../../../../environment/environment";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()  data:any;
  max = 5;
  min = 0;
  step = 1;
  form = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(8)]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
    priority: new FormControl(0, [Validators.required])
  })

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  clearForm() {
    this.form.reset();
  }


  async submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      try {
        const task = {
          id: Math.floor(Math.random() * (10000000 - 1)),
          title: formData.title,
          description: formData.description,
          priority: formData.priority,
          createDate: new Date(),
          owner: this.authService.getUserData().id,
        }
        const res = await axios.post(environment.apiKey + "/task",task);
        if(!res.data){
          return;
        }
        this.clearForm();
        await this.data();
      } catch (e) {

      }
    }
  }
}
