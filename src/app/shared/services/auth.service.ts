import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /** Check User exist or not  */ 
  getUserDetails() {
    if(sessionStorage.getItem('userDetails')) {
      return true;
    } else {
      return false;
    }
  }

  getRole() {
    return 'Admin';
  }
}
