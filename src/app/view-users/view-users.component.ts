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
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent {
  displayedColumns: string[] = [
    'id',
    'email',
    'firstName',
    'surname',
    'dateOfBirth',
  ];
  dataSource = Users;
}
