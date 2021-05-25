import { Component, OnInit } from '@angular/core';
import { Ligne } from '../model/model.ligne';
import { TestModel } from '../model/model.test';
import { CustomMap } from '../shared/model.customMap';
import { TestService } from '../shared/testService';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ligne : any ;

  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private testService : TestService) { 
    
  }

  ngOnInit(): void {
    
  }

   getResponse(){
    this.testService.sendrequest().subscribe(data=>
      {
        
        this.ligne =  data ;
        console.log(this.ligne);
        console.log(this.ligne.label);
      })
  }



}
