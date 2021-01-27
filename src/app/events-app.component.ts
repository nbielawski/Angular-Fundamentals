import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `<nav-bar></nav-bar>
            <router-outlet></router-outlet>
             `
  
})
export class EventsAppComponent implements OnInit {
  title = 'angular-fundamentals';

  constructor(private authSvc:AuthService){

  }

  ngOnInit(){
    this.authSvc.checkAuth();
  }
}
