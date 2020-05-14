import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CannotFindPageComponent } from './cannot-find-page/cannot-find-page.component';
import { ServerIssueComponent } from './server-issue/server-issue.component';
import { SharedModule } from './shared/shared.module';

import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CannotFindPageComponent,
    ServerIssueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    UserModule,
 
    BrowserAnimationsModule,
 
    NgbModule
  ],
  providers: [
    AppService,
    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
