import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled5';
  dashboard(){
    var dashboard = document.getElementById("dashboard");
    var adduser = document.getElementById("adduser");
    var showuser = document.getElementById("showuser");
    // @ts-ignore
    dashboard.style.display = "block";
    // @ts-ignore
    adduser.style.display = "none";
    // @ts-ignore
    showuser.style.display = "none";
  }



}
