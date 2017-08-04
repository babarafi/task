import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
@Input() count:number=0;
@Output() change:EventEmitter<number>= new EventEmitter<number>();
public items: Array<any>;
public result:any;
  constructor() { 
    this.result='No RESULT';
    // this.items=['a','b','c'];
  }

  ngOnInit() {
  }

  increment(){
     this.count++;
     this.change.emit(this.count);
  }

  decrement(){
      this.count--;
      this.change.emit(this.count);
  }
}
