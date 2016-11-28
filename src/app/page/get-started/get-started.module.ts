import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';

import { GetStartedComponent } from './get-started.component';
import { FindYourPathComponent } from './find-your-path/find-your-path.component';
import { ApplyComponent } from './apply/apply.component';
import { AffordComponent } from './afford/afford.component';
import { EnrollComponent } from './enroll/enroll.component';

@NgModule({
  imports: [
    CommonModule,
    GetStartedRoutingModule
  ],
  declarations: [
    GetStartedComponent,
    FindYourPathComponent,
    ApplyComponent,
    AffordComponent,
    EnrollComponent
  ]
})
export class GetStartedModule { }
