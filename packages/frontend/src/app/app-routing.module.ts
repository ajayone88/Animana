import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ClientsComponent } from "./clients/clients.component";
import { PatientsComponent } from "./patients/patients.component";
import { ClientComponent } from "./clients/client/client.component";
import { PatientComponent } from "./patients/patient/patient.component";
import {AddPatientComponent} from "./patients/add-patient/add-patient.component";
import {DeletePatientComponent} from "./patients/delete-patient/delete-patient.component";
import {InvoicesComponent} from "./invoices/invoices.component";
import {InvoiceComponent} from "./invoices/invoice/invoice.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {
      path:'clients',
      component:ClientsComponent,
      children:[
        {
          path:'client/:id',
          component:ClientComponent
        }
      ]
  },
  {   path:'patients',
      component:PatientsComponent,
      children:[
        {
          path:'patient/:id',
          component:PatientComponent
        },
        {
          path:'add-patient',
          component:AddPatientComponent
        },
        {
          path:'delete-patient/:id',
          component:DeletePatientComponent
        }
      ]
  },
  {
    path:'invoices',
    component:InvoicesComponent,
    children:[
      {
        path:"invoice/:id",
        component:InvoiceComponent
      }
    ]
  },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
