import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { GetStartedComponent } from './get-started.component';
import { FindYourPathComponent } from './find-your-path/find-your-path.component';
import { ApplyComponent } from './apply/apply.component';
import { AffordComponent } from './afford/afford.component';
import { EnrollComponent } from './enroll/enroll.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'get-started',
        component: GetStartedComponent,
        children: [
          { path: '', component: FindYourPathComponent },
          { path: 'find-your-path', component: FindYourPathComponent },
          { path: 'apply', component: ApplyComponent },
          { path: 'afford', component: AffordComponent },
          { path: 'enroll', component: EnrollComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GetStartedRoutingModule { }
