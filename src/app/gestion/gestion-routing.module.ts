import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { GestionComponent } from './gestion.component';
import { StatistiquesComponent } from './admin/statistiques/statistiques.component';
import { VoyageursComponent } from './admin/voyageurs/voyageurs.component';
import { ResponsablesComponent } from './admin/responsables/responsables.component';
import { SigngestionComponent } from './signgestion/signgestion.component';
import { ProfileComponent } from '../profile/profile.component';

const routes : Routes =
[
  {path : 'gestion',component:GestionComponent,
  children :[
    {path:'',component:SigngestionComponent},
    {path:'admin',component:AdminComponent,
    children : 
    [
      {path:'statistiques',component:StatistiquesComponent,data:{animation : 'isRight'}},
      {path:'voyageurs',component : VoyageursComponent,data:{animation : 'isRight'}},
      {path:'responsables',component:ResponsablesComponent,data:{animation : 'isRight'}},
      {path:'profile',component:ProfileComponent,data:{animation : 'isRight'}}
    ]},
    {path:'responsable',component:ResponsableComponent,
  children:
    [
      {path:'profile',component:ProfileComponent}
    ]},
  ]}
] ;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class GestionRoutingModule { }
