import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { TryService} from '../services/try.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers:[TryService]
})
export class ListUserComponent implements OnInit {
  public user: Subscription;
  constructor( public service :TryService) { }

  ngOnInit() {
    this.service.getUser().subscribe(res =>{
      this.user = res['message'];
      console.log(this.user)
    })
  }

}
