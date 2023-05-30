import {Component, OnInit} from '@angular/core';
import axios from "axios";
import {environment} from "../../../environment/environment";

export interface User {
  id: number;
  email: string;
  firstName: string;
  role: string;
  dateOfBirth: string;
}

const Users: User[] = [
  {
    id: 1,
    email: 'Hydrogen',
    firstName: 'Hydrogen',
    role: 'asdf',
    dateOfBirth: '2017-01-01',
  },
  {
    id: 2,
    email: 'Helium',
    firstName: 'Hydrogen',
    role: ';lkjl',
    dateOfBirth: '2017-01-01',
  },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'email',
    'firstName',
    'role',
    'dateOfBirth',
  ];
  dataSource = Users;

  async ngOnInit() {
    const {data} = await axios.get(environment.apiKey + "/users");
    this.dataSource = data.map((item: string[]) => {
      return {
        id: item[0],
        email: item[1],
        firstName: item[2],
        role: item[3],
        dateOfBirth: item[4],
      }
    });
  }
}
