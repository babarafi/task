import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from '../list-user/list-user.component';
import { CreateComponent } from '../create/create.component';
import {MyNewRouting} from '../route/my-new.routing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyNewRouting,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    ListUserComponent,
    CreateComponent,
  ]
})
export class MyNewModule { }
