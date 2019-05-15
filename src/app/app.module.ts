import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';

const appRoutes: Routes = [
  { path: 'addContacts',      component: AddContactsComponent ,data: {animation: 'addContacts'} },
  { path: 'login',      component: LoginComponent,data: {animation: ''} },
  { path: 'newAccount', component: NewAccountComponent,  data: {animation: ''}},
  { path: '**', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewAccountComponent,
    AddContactsComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
