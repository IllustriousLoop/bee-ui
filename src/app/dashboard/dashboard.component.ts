import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  title: string;
  description: string;
  priority: number;
  createDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    title: 'Hydrogen',
    description: 'Hydrogen',
    priority: 6,
    createDate: '2017-01-01',
  },
  {
    id: 2,
    title: 'Helium',
    description: 'Hydrogen',
    priority: 1,
    createDate: '2017-01-01',
  },
  {
    id: 3,
    title: 'Lithium',
    description: 'Hydrogen',
    priority: 4,
    createDate: '2017-01-01',
  },
  {
    id: 4,
    title: 'Beryllium',
    description: 'Hydrogen',
    priority: 3,
    createDate: '2017-01-01',
  },
  {
    id: 10,
    title: 'Neon',
    description: 'Hydrogen',
    priority: 1,
    createDate: '2017-01-01',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'priority',
    'createDate',
  ];
  dataSource = ELEMENT_DATA;
  max = 5;
  min = 0;
  step = 1;
}
