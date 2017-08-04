import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../services/my-new-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
   providers: [MyNewServiceService]
})
export class FollowingComponent implements OnInit {

  public items;
  public items2 = [];
  constructor(public service: MyNewServiceService) { }

  ngOnInit() {
    this.service.get_user_following().subscribe(res => {
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
