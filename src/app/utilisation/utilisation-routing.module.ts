import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilisationComponent } from './utilisation.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SoldeComponent } from './dashbord/solde/solde.component';
import { SignComponent } from './sign/sign.component';
import { MyAlimentationsComponent } from './dashbord/my-alimentations/my-alimentations.component';
import { HoraireComponent } from './dashbord/horaire/horaire.component';
import { TicketsComponent } from './dashbord/tickets/tickets.component';
import { ProfileComponent } from '../profile/profile.component';
import { PayementComponent } from './dashbord/payement/payement.component';
import { Home2Component } from './dashbord/home/home.component';

const routes : Routes =
[
  {path : 'public',component : UtilisationComponent,
   children : [
     {path : 'home',component:HomeComponent},
     {path : 'sign',component:SignComponent},
     {path : 'dashbord',component:DashbordComponent,
      children : [
        {path:'solde' , component :SoldeComponent},
        {path:'profile' , component :ProfileComponent},
        {path:'myAlimentations' , component :MyAlimentationsComponent},
        {path:'horaire' , component :HoraireComponent},
        {path:'tickets' , component :TicketsComponent},
        {path:'payement' , component :PayementComponent},
        {path:'home' , component :Home2Component}
      ]}
   ]}
];



@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class UtilisationRoutingModule { }
