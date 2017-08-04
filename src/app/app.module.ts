import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WelcomePipe } from './welcome.pipe';
import { UserComponent } from './user/user.component';
// import {routing } from './app.routes';
import { AppRouting } from './app.routing';
import { OverviewComponent } from './overview/overview.component';
import { FollowingComponent } from './following/following.component';
import { FollowerComponent } from './follower/follower.component';
import { StarsComponent } from './stars/stars.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import 'hammerjs';
import { ProfileComponent } from './profile/profile.component';
import { DialogComponent } from './dialog/dialog.component';

// import { ListUserComponent } from './list-user/list-user.component';
// import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    WelcomePipe,
    UserComponent,
    OverviewComponent,
    FollowingComponent,
    FollowerComponent,
    StarsComponent,
    RepositoriesComponent,
    ProfileComponent,
    DialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    // routing
    AppRouting,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,

  ],
   entryComponents: [
    DialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
