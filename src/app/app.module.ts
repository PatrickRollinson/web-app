// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';


// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

// custom modules
import { MaterialModule } from './material.module';

// auth
import { ProfileComponent } from './auth/profile/profile.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { SignUpFormComponent } from './auth/sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './auth/sign-in-form/sign-in-form.component';
import { ProviderSignInComponent } from './auth/provider-sign-in/provider-sign-in.component';
import { UpdateUserDetailsComponent } from './auth/update-user-details/update-user-details.component';

// projects
import { ProjectPageComponent } from './project/project-page/project-page.component';
import { ProjectsPageComponent } from './project/projects-page/projects-page.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ProjectCardComponent } from './project/project-card/project-card.component';

// mapping
import { MapPageComponent } from './mapping/map-page/map-page.component';
import { MapComponent } from './mapping/map/map.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditLanguageOptionComponent } from './shared/edit-language-option/edit-language-option.component';
import { LanguageOptionComponent } from './shared/language-option/language-option.component';
import { GroupPageComponent } from './tag/group-page/group-page.component';

import { TokenInterceptor } from './token.interceptor';
import { SelectUserGroupComponent } from './user-group/select-user-group/select-user-group.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { SearchComponent } from './project/search/search.component';
import { UserGroupPageComponent } from './user-group/user-group-page/user-group-page.component';
import { LocationFilterComponent } from './mapping/location-filter/location-filter.component';

// tag
import { TagPageComponent } from './tag/tag-page/tag-page.component';
import { RootTagsPageComponent } from './tag/root-tags-page/root-tags-page.component';
import { EditTagGroupsPageComponent } from './tag/edit-tag-groups-page/edit-tag-groups-page.component';
import { EditTagGroupPageComponent } from './tag/edit-tag-group-page/edit-tag-group-page.component';
import { EditTagComponent } from './tag/edit-tag/edit-tag.component';
import { AddTagComponent } from './tag/add-tag/add-tag.component';
import { CreateTagComponent } from './tag/create-tag/create-tag.component';




// pages
import { HomeCardDeckComponent } from './pages/home/home-card-deck/home-card-deck.component';
import { EthicsPageComponent } from './pages/ethics-page/ethics-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ReadinessLevelsComponent } from './pages/readiness-levels/readiness-levels.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { FooterComponent } from './footer/footer.component';
import { UserGroupUsersComponent } from './user-group/user-group-users/user-group-users.component';
import { AddUserComponent } from './user-group/user-group-users/add-user/add-user.component';
import { RemoveUserComponent } from './user-group/user-group-users/remove-user/remove-user.component';
import { EditUserGroupUserComponent } from './user-group/user-group-users/edit-user-group-user/edit-user-group-user.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { SyncReportsComponent } from './admin/sync-reports/sync-reports.component';
import {
  UserGroupLocationsComponent,
  UserGroupLocationRowComponent,
  UserGroupLocationNameComponent,
  UserGroupLocationWebsiteComponent
} from './user-group/user-group-locations/user-group-locations.component';
import {
  UserGroupLocationDescComponent,
  UserGroupLocationDescArrayComponent
} from './user-group/user-group-locations/user-group-location-desc/user-group-location-desc.component';
import { ConferenceComponent } from './pages/events-page/conference/conference.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    HomeComponent,
    ProjectPageComponent,
    ProjectsPageComponent,
    MapPageComponent,
    MapComponent,
    EthicsPageComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
    ToolbarComponent,
    EditProjectComponent,
    EditLanguageOptionComponent,
    LanguageOptionComponent,
    GroupPageComponent,
    TagPageComponent,
    RootTagsPageComponent,
    EditTagGroupsPageComponent,
    EditTagGroupPageComponent,
    CreateTagComponent,
    AddTagComponent,
    EditTagComponent,
    SelectUserGroupComponent,
    SignInFormComponent,
    SignUpFormComponent,
    ProviderSignInComponent,
    UpdateUserDetailsComponent,
    SearchComponent,
    ReadinessLevelsComponent,
    UserGroupPageComponent,
    LocationFilterComponent,
    HomeCardDeckComponent,
    EventsPageComponent,
    FooterComponent,
    UserGroupUsersComponent,
    AddUserComponent,
    RemoveUserComponent,
    EditUserGroupUserComponent,
    AdminPageComponent,
    SyncReportsComponent,
    UserGroupLocationsComponent,
    UserGroupLocationRowComponent,
    UserGroupLocationNameComponent,
    UserGroupLocationDescComponent,
    UserGroupLocationDescArrayComponent,
    UserGroupLocationWebsiteComponent,
    ConferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    ValidateEqualModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [CreateTagComponent, EditLanguageOptionComponent, SelectUserGroupComponent, AddUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
