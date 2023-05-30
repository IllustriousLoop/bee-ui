import {Component, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../../auth.service";
import axios from "axios";
import {environment} from "../../../environment/environment";

export interface task {
  id: number;
  title: string;
  description: string;
  priority: number;
  createDate: string;
}

const tasks: task[] = [
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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'priority',
    'createDate',
  ]
  dataSource = tasks;

  constructor(private authService: AuthService) {
  }

  async update() {
    const owner = this.authService.getUserData().id || "254";
    const {data} = await axios.get(environment.apiKey + "/tasks?owner=" + owner);
    this.dataSource = data.map((item: string[]) => {
      return {
        id: item[0],
        title: item[1],
        description: item[2],
        priority: item[3],
        createDate: item[4]
      }
    })
    console.log("Hello", data)
  }

  async ngOnInit() {
    if (this.authService.isAuth()) {
      await this.update();
    }
  }
}
