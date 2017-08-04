import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() titlehome;
  @Output() varOutput = new EventEmitter();
  public sosial = 'ok';
  constructor() { }

  ngOnInit() {
  }
  
  onClick(data:any){
    this.titlehome=data;
     this.varOutput.emit(data);
  }

}
