import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../services/my-new-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css'],
  providers: [MyNewServiceService]
})
export class FollowerComponent implements OnInit {
  public items;
  public items2 = [];
  constructor(public service: MyNewServiceService) { }

  ngOnInit() {

    this.service.get_user_follower().subscribe(res => {
      this.items = res;
      let tampung = this.items
        .map(function (x) {
          return x.url;
        });
      if (tampung) {
        let xx = tampung.forEach(element => {
          let zz: Subscription = this.service.getContentUrl(element).subscribe(datas => {
            this.items2.push(datas)
          });
        });
      }
    });
  }

}
