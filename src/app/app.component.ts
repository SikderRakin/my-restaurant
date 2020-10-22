import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    showAppElement=true;
  onShow(isShow:boolean){
 
this.showAppElement=isShow;

  }
}
