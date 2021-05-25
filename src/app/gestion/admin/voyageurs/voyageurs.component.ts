import { Component, OnInit } from '@angular/core';
import {VoyageurService} from '../../../service/voyageur.service';
import {Voyageur} from '../../../model/model.voyageur';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-voyageurs',
  templateUrl: './voyageurs.component.html',
  styleUrls: ['./voyageurs.component.css']
})
export class VoyageursComponent implements OnInit {

  isLoading : boolean = true ;
  config : any ;

  voyageurs :Voyageur[]=[];
  constructor(private voyageurService : VoyageurService) { }

  ngOnInit(): void {
    //this.getVoyageurs();
    for (var _i = 0; _i < 20; _i++) {
      let v : Voyageur =new Voyageur();
      v.nom = "nom"+_i;
      v.prenom = "prenom"+_i;
      v.cin = "cin"+_i;
      v.phone = "phone"+_i;
      this.voyageurs.push(v);
    }
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 7,
      currentPage: 1,
      totalItems: this.voyageurs.length
    };

    this.isLoading=false;
  }

  public getVoyageurs()
  {
    this.voyageurService.getVoyageurs().subscribe(voyageurs=>{
      this.voyageurs = voyageurs;
      this.isLoading=false ;
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
