import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from 'src/app/layout/layout.module';



@NgModule({
  declarations: [
    RegisterComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule
  ],
  exports:[
    RegisterComponent,
    SigninComponent,
  ]
})

export class UserModule { }
