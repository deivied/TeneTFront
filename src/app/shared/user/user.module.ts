import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../register/register.component';
import { SigninComponent } from '../../signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[
  ]
})

export class UserModule { }
