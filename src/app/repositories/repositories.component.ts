import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../services/my-new-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers: [MyNewServiceService]
})
export class RepositoriesComponent implements OnInit {
  public FbKeyword;
  public items;

  constructor(public service: MyNewServiceService) { }

  type = [
    { value: 'all-0', viewValue: 'All' },
    { value: 'source-1', viewValue: 'Source' },
    { value: 'fork-2', viewValue: 'Fork' },
    { value: 'mirror-2', viewValue: 'Mirror' }
  ];

  onFindClick(val) {

    this.FbKeyword = val;
  }

  ngOnInit() {
    this.service.get_user_repositories().subscribe(res => {
      this.items = res;


    });
    // if(this.FbKeyword){
    // this.service.get_repositories_search(this.FbKeyword).subscribe(res => {
    //   this.items = res;
    //   console.log("keyword", this.items)

    // });
    // }
  }



}
