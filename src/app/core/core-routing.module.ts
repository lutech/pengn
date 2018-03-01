import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Views
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: "clients", component: ClientsComponent },
    { path: "settings", component: SettingsComponent },
];

@NgModule ({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})

export class CoreRoutingModule { }

export const CoreComponents = [ 
    HomeComponent,
    ClientsComponent,
    SettingsComponent
 ];
