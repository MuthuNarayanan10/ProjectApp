import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';


const routes: Routes = [
  {path :'login',component:LoginComponent},
  {path :'signup',component:SignupComponent},
  {path :'forgot-pass', component:ForgotPassComponent},
  {path :'verify-email/:userId', component:VerifyMailComponent},
  {path :'reset-pass/:validationToken', component:ResetPassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
