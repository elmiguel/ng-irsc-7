import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrscGalleryDirective, IrscGalleryImageDirective } from './gallery.directives'
import { GalleryComponent } from './gallery/gallery.component'
import { GalleryImageComponent } from './gallery-image/gallery-image.component'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryComponent,
    GalleryImageComponent
  ],
  exports: [
    GalleryComponent,
    GalleryImageComponent
  ]
})
export class GalleryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GalleryModule,
      providers: []
    };
  }
}
