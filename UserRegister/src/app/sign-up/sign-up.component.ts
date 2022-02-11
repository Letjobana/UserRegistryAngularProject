import { User } from './Shared/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user!: User;
  constructor() { }

  ngOnInit(): void {
  }
  resetForm(form:NgForm){
    form.reset();

    this.user={
      UserName:'',
      Password:'',
      Email:'',
      FirstName:'',
      LastName:''
    }

  }

}
