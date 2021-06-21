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
    this.getTickets();
    
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
