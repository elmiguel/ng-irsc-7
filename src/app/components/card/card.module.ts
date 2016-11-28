import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IrscCardDirective,
  IrscCardHeaderDirective,
  IrscCardContentDirective,
  IrscCardFooterDirective
} from './card.directives';
import { IrscCardComponent } from './irsc-card/irsc-card.component';
import { IrscCardHeaderComponent } from './irsc-card-header/irsc-card-header.component';
import { IrscCardContentComponent } from './irsc-card-content/irsc-card-content.component';
import { IrscCardFooterComponent } from './irsc-card-footer/irsc-card-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IrscCardDirective,
    IrscCardHeaderDirective,
    IrscCardContentDirective,
    IrscCardFooterDirective,
    IrscCardComponent,
    IrscCardHeaderComponent,
    IrscCardContentComponent,
    IrscCardFooterComponent
  ],
  exports: [
    IrscCardDirective,
    IrscCardHeaderDirective,
    IrscCardContentDirective,
    IrscCardFooterDirective,
    IrscCardComponent,
    IrscCardHeaderComponent,
    IrscCardContentComponent,
    IrscCardFooterComponent
  ]
})
export class CardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CardModule,
      providers: []
    };
  }
}
