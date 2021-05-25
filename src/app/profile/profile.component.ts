import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : any = {nom:"",prenom:"",gmail:"",cin:"",phone:"",sexe:""};

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  public getCurrentUser()
  {
    this.userService.getCurrentUser().subscribe(user=>
      {
        this.user=user;
      })
  }

  public onUpdate()
  {
    this.userService.updateProfile(this.user).subscribe(user=>
      {
        this.user=user;
        console.log("successful opration");
      })

  }



}
