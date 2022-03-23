import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomesComponent } from './homes/homes.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HomesComponent,
    LoadingSpinnerComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HomesComponent,
    LoadingSpinnerComponent,
    NavBarComponent
  ]
})
export class LayoutModule { }
