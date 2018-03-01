import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Compenents
import { CoreRoutingModule, CoreComponents } from './core-routing.module';

// Services
import { ClientsService } from './services';

// Shared
import { SharedComponentsModule } from '../shared/web/shared-components.module';


@NgModule({
    imports: [
        CommonModule, 
        RouterModule, 
        CoreRoutingModule, 
        SharedComponentsModule
    ],
    declarations: [
        CoreComponents
    ],
    exports: [
        CoreComponents
    ],
    providers: [
        ClientsService
    ]
})

export class CoreModule { }
