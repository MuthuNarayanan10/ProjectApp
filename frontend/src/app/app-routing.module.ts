import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CannotFindPageComponent } from './cannot-find-page/cannot-find-page.component';
import { ServerIssueComponent } from './server-issue/server-issue.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',

  },

  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule',

  },

  {path : '', redirectTo:'user/login',pathMatch:'full'},

  {path :'serverError', component:ServerIssueComponent},
  {path :'*',component:CannotFindPageComponent},
  {path :'**',component:CannotFindPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
