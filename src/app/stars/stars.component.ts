import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../services/my-new-service.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
  providers: [MyNewServiceService]
})
export class StarsComponent implements OnInit {
  public items;
  public items2;
  constructor(public service: MyNewServiceService) { }

  ngOnInit() {
    this.service.get_repositories_starred().subscribe(res => {
      this.items = res;
    });

  }

}
