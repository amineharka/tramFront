import { Component, OnInit } from '@angular/core';
import {ResponsableGuichet} from '../../../model/model.responsableguichet';
import {ResponsableService} from '../../../service/responsable.service';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  config : any ;
  responsables : ResponsableGuichet[] = [] ;
  createRespoRequest :any = {gmail:""};

  constructor(private responsableService : ResponsableService) { }

  ngOnInit(): void {
    //this.getRespos();
    for (var _i = 0; _i < 20; _i++) {
      let v : ResponsableGuichet =new ResponsableGuichet();
      v.nom = "nom"+_i;
      v.prenom = "prenom"+_i;
      v.cin = "cin"+_i;
      v.phone = "phone"+_i;
      this.responsables.push(v);
    }
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 7,
      currentPage: 1,
      totalItems: this.responsables.length
    };
  }

  public getRespos()
  {
    this.responsableService.getRespos().subscribe(responsables=>{
      this.responsables = responsables ;
      console.log(this.responsables.length);
    })
  }

  public creerRespo()
  {
    this.responsableService.creerRespo(this.createRespoRequest).subscribe(data=>{
      console.log("great Work");
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
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
