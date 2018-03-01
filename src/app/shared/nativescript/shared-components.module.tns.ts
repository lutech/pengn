import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { MyDrawerItemComponent } from "./side-nav/my-drawer-item/my-drawer-item.component";
import { MyDrawerComponent } from "~/app/shared/nativescript/side-nav/my-drawer/my-drawer.component";

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        SideNavComponent,
        SideNavItemComponent
    ],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedComponentsModule { }
