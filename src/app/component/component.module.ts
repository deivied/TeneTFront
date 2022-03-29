import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../component/footer/footer.component';
import { HomesComponent } from '../homes/homes.component';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    FooterComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    LoadingSpinnerComponent,
  ]
})
export class ComponentModule { }
