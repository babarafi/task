import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../services/my-new-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [MyNewServiceService]
})
export class OverviewComponent implements OnInit {
  public items;
  public items2;
  constructor(public service: MyNewServiceService) { }

  ngOnInit() {
    this.service.get_repositories_starred().subscribe(res => {
      this.items = res;
    });

  }

}