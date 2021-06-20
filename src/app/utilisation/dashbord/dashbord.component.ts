import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  generateTicketRequest : any ={nomber : "",ligne : ""};

  constructor() { }

  ngOnInit(): void {
  }

  generateTicket(){

  }

  public onOpenModal()
  {
   
   document.getElementById("overlay").style.visibility="visible";
   document.getElementById("overlay").style.opacity="1";
   document.getElementById("modal").style.visibility="visible";
   document.getElementById("modal").style.top="50%";
  }
 
  public onCloseModal()
  {
   
   document.getElementById("overlay").style.visibility="hidden";
   document.getElementById("overlay").style.opacity="0";
   document.getElementById("modal").style.visibility="hidden";
   document.getElementById("modal").style.top="-50%";
  }

}
