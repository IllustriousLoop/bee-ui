import { Component } from '@angular/core';

export interface User {
  id: number;
  email: string;
  firstName: string;
  surname: string;
  dateOfBirth: string;
}

const Users: User[] = [
  {
    id: 1,
    email: 'Hydrogen',
    firstName: 'Hydrogen',
    surname: 'asdf',
    dateOfBirth: '2017-01-01',
  },
  {
    id: 2,
    email: 'Helium',
    firstName: 'Hydrogen',
    surname: ';lkjl',
    dateOfBirth: '2017-01-01',
  },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  displayedColumns: string[] = [
    'id',
    'email',
    'firstName',
    'surname',
    'dateOfBirth',
  ];
  dataSource = Users;
}
