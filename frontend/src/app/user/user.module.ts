import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import  {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPassComponent, ResetPassComponent, VerifyMailComponent],
  imports: [
 
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule,

    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

    UserRoutingModule,

      



         
          
      
    
  ]
})
export class UserModule { }
