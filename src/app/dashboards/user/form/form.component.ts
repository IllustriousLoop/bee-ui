import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import axios from "axios";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  max = 5;
  min = 0;
  step = 1;
  form = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(8)]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
    priority: new FormControl(0, [Validators.required])
  })

  constructor(private fb: FormBuilder) {
  }

  clearForm (){
    this.form.reset();
  }


  async submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      try {
        //const x = await axios.get('http://localhost:4200');
        console.log("Hello:", formData)
      } catch (e) {

      }
    }
  }
}
