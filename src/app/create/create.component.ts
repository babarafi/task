import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 
import { TryService } from '../services/try.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[TryService]
})
export class CreateComponent implements OnInit {
  userForm: FormGroup;
  public Usersub:any;
  constructor(
    public service_:TryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm= this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }

  onSubmit(){
    let nama = this.userForm.value['name'];
    let password = this.userForm.value['password'];
    let email = this.userForm.value['email'];
    this.Usersub= this.service_.postUser(nama,email,password,'','','').subscribe(data => {
      console.log(JSON.stringify(data))
    })
  }

}