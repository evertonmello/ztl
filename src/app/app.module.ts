import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { HomeComponent } from './components/home/home.component';
import { CooltzIconsComponent } from './components/widgets/cooltz-icons/cooltz-icons.component';
import { GradientImgComponent } from './components/widgets/gradient-img/gradient-img.component';

const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent ,data: {animation: 'home'} },
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
    HomeComponent,
    CooltzIconsComponent,
    GradientImgComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
