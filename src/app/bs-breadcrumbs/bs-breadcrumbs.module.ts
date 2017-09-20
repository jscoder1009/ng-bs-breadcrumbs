import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsBreadCrumbsComponent } from './bs-bread-crumbs/bs-bread-crumbs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BsBreadCrumbsComponent],
  exports: [BsBreadCrumbsComponent]
})
export class BsBreadcrumbsModule {
  static forRoot() {
    return {
      ngModule: BsBreadcrumbsModule,
      providers: []
    }
  }
}
