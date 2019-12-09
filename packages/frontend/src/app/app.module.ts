import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';
import { PatientsComponent } from './patients/patients.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './clients/client/client.component';
import { PatientComponent } from './patients/patient/patient.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { DeletePatientComponent } from './patients/delete-patient/delete-patient.component';
import { FormsModule } from "@angular/forms";
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoices/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    PatientsComponent,
    HomeComponent,
    ClientComponent,
    PatientComponent,
    AddPatientComponent,
    DeletePatientComponent,
    InvoicesComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
