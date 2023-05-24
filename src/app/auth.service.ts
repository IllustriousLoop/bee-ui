import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userData: any;

  constructor() {
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  isAuth() {
    return this.isAuthenticated;
  }

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
}
