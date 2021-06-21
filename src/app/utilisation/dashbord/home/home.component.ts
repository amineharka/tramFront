import { Component, OnInit } from '@angular/core';
import { VoyageurService } from 'src/app/service/voyageur.service';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home2Component implements OnInit {
  globalInformation : any ;

  /********************************/

  title = 'Browser market shares at a specific website, 2014';
   type = 'PieChart';
   data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
   columnNames = ['Browser', 'Percentage'];
   options = {    
   };
   width = 550;
   height = 400;
  /****************************** */
  

  constructor(private voyageurService:VoyageurService) { }

  ngOnInit(): void {
    this.getInformations();
  }

  public getInformations()
  {
    this.voyageurService.getGlobalInformations().subscribe(data=>{
      this.globalInformation=data;
      console.log(data);
    })
  }

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    //firstRowIsData: true,
    options: {'title': 'Tasks'},
  };

}
