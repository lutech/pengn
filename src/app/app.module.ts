// COMMON MODULES
import { NgModule, Component, NgModuleFactoryLoader, NO_ERRORS_SCHEMA} from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import { HttpModule  } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// APP MODULES
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from './core/core.module';

//APP SERVICES
import { ClientsService } from './core/services';

@NgModule({
    imports: [
        HttpClientModule,
        HttpModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ClientsService
    ],

})
export class AppModule { }
