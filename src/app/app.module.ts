import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/widgets/notifications/notifications.component'
import { NotificItemComponent } from './components/widgets/notifications/notific-item/notific-item.component'
import { CardComponent } from './components/home/card/card.component';
import { AllNotificationsComponent } from './components/all-notifications/all-notifications.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { SearchAComponent } from './components/search/search.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { ResultAllComponent } from './components/search/result-all/result-all.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';
import { CooltzIconsComponent } from './components/widgets/cooltz-icons/cooltz-icons.component';
import { BackHeaderComponent } from './components/widgets/back-header/back-header.component';
import { GradientImgComponent } from './components/widgets/gradient-img/gradient-img.component';

const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent ,data: {animation: 'homePage'} },
  { path: 'addContacts',      component: AddContactsComponent ,data: {animation: 'addContactsPage'} },
  { path: 'login',      component: LoginComponent,data: {animation: 'loginPage'} },
  { path: 'profile',      component: ProfileComponent,data: {animation: 'profile'} },
  { path: 'notifications',      component: AllNotificationsComponent,data: {animation: 'notifications'} },
  { path: 'newPost',      component: NewPostComponent,data: {animation: 'newPost'} },
  { path: 'postView',      component: PostViewComponent,data: {animation: 'postView'} },
  { path: 'search',      component: SearchAComponent, data:{ animation:'search' }},
  { path: 'resultAll',      component: ResultAllComponent, data:{ animation:'resultAll' }},
  { path: 'search/:opt',      component: SearchAComponent, data:{ animation:'search'} },
  { path: 'newAccount', component: NewAccountComponent,  data: {animation: 'newAccountPage'}},
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchAComponent,
    LoginComponent,
    NewAccountComponent,
    SearchResultComponent,
    AddContactsComponent,
    NewPostComponent,
    AllNotificationsComponent,
    BackHeaderComponent,
    HomeComponent,
    ProfileComponent,
    PostViewComponent,
    CardComponent,
    NotificItemComponent,
    NotificationsComponent,
    ResultAllComponent,
    ListContactComponent,
    CooltzIconsComponent,
    GradientImgComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [HttpClientModule],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
