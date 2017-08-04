import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../services/my-new-service.service';
import { Subscription } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { MdDialog, MdDialogConfig, MdDialogRef, MdDialogModule, MdButtonModule } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MyNewServiceService]
})
export class ProfileComponent implements OnInit {

  public items: Subscription;
  constructor(public service: MyNewServiceService,public dialog: MdDialog ) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit() {
     this.service.get_user_detail().subscribe(res =>{
      this.items = res;

  });
  }

}


