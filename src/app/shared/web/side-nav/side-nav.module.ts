import { NgModule } from "@angular/core";
import { MaterialModule } from "../vendor/angularMaterial/material.module";

import { SideNavComponent } from "./side-nav-component/side-nav.component";
import { SideNavItemComponent } from "./side-nav-item-component/side-nav-item.component";


@NgModule({
    imports: [
        MaterialModule
    ],
    declarations: [
        SideNavComponent,
        SideNavItemComponent
    ],
    exports: [
        SideNavComponent,
        SideNavItemComponent
    ]
})
export class SideNavModule { }
