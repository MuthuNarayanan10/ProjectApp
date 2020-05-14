import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { FirstCharComponent } from './first-char/first-char.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';

/* Module for Toaster */
import { ToastrModule } from 'ngx-toastr';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { ListContainerComponent } from './list-container/list-container.component';
import { ModNavbarComponent } from './mod-navbar/mod-navbar.component';
import { FrndListComponent } from './frnd-list/frnd-list.component';

import {  NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
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
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,

    NgbModalModule,
    
    ReactiveFormsModule,
    RouterModule,


    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],

  declarations: [ FirstCharComponent, AlertBoxComponent, ListContainerComponent, ModNavbarComponent, FrndListComponent],

  exports: [
    FirstCharComponent,
    AlertBoxComponent,
    ListContainerComponent,
    ModNavbarComponent,
    FrndListComponent,
    CommonModule,
    FormsModule
  ],

  entryComponents: [
    AlertBoxComponent
  ],

})
export class SharedModule { }