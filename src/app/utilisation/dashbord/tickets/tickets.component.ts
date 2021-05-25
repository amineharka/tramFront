import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Eticket } from 'src/app/model/model.eticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  etickets : Eticket[] = []
  config : any ;
  

  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  
  value = 'Techiediaries';
  

  constructor(private ticketService : TicketService) { }

  ngOnInit(): void {
    //this.getTickets();
    for (var _i = 0; _i < 4; _i++) {
      let v : Eticket =new Eticket();
      v.prix = 8;

      v.status = "Non Valide";
      
      this.etickets.push(v);
    }
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.etickets.length
    };
  }

  public getTickets()
  {
    this.ticketService.getTickets().subscribe(tickets=>{
      this.etickets = tickets ;
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
