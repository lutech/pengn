import { NgModule } from "@angular/core";

import { ActionBarComponent } from './action-bar/';
import { ActionItemComponent } from './action-item/';
import { ButtonComponent } from './button/';
import { LabelComponent } from './label/';
import { ImageComponent } from './image/';
//import { ListViewComponent } from './list-view/';
import { StackLayoutComponent } from './layout-containers/stack-layout/stack-layout.component';


@NgModule({
    imports: [

    ],
    declarations: [
        ActionBarComponent,
        ActionItemComponent,
        ButtonComponent,
        LabelComponent,
        ImageComponent,
        //ListViewComponent,
        StackLayoutComponent
    ],
    exports: [
        ActionBarComponent,
        ActionItemComponent,
        ButtonComponent,
        LabelComponent,
        ImageComponent,
        //ListViewComponent,
        StackLayoutComponent
    ]
})
export class NativeScriptWebComponents { }
