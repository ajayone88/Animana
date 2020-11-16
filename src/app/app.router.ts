import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../app/home/home.component";
import { ClientsComponent } from './clients/clients.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PatientsComponent } from './patients/patients.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';

const appRoutes: Routes = [
    {   
        path:"home", 
        component: HomeComponent
    },
    {   
        path:"clients", 
        component: ClientsComponent, 
        children:[
            {   
                path:":id", 
                component: ClientDetailsComponent
            },
        ]
    },
    {   
        path:"patients",
        component: PatientsComponent
    },
    {   
        path:"invoices", 
        component: InvoicesComponent
    }
];


@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouter{}