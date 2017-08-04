import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  xxxx="xxxxx"
  myCount:number=10;


onSelected(event){
this.xxxx=event;
}

myChange(event){
  this.myCount=event;
}

}
