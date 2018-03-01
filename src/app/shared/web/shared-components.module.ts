import { NgModule } from '@angular/core';

// App
import { SideNavModule } from './side-nav/side-nav.module';
import { NativeScriptWebComponents } from './nativescript-web-components/nativescript-web-components.module';

// Vendor
import { MaterialModule } from './vendor/angularMaterial/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    NativeScriptWebComponents,
    MaterialModule,
    AngularFontAwesomeModule
  ],
  exports: [
    NativeScriptWebComponents,
    MaterialModule,
    AngularFontAwesomeModule
  ]
})
export class SharedComponentsModule {}
