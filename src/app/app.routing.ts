import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OverviewComponent } from './overview/overview.component';
import { FollowingComponent } from './following/following.component';
import { FollowerComponent } from './follower/follower.component';
import { StarsComponent } from './stars/stars.component';
import { RepositoriesComponent } from './repositories/repositories.component';
// konfigurasi route
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Overview'
  },
  // { path: 'home', component: HomeComponent },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   loadChildren: 'app/my-new/my-new.module#MyNewModule'
  // },
  { path: 'Overview', component: OverviewComponent },
  { path: 'Following', component: FollowingComponent },
  { path: 'Follower', component: FollowerComponent },
  { path: 'Stars', component: StarsComponent },
  { path: 'Repositories', component: RepositoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {

}
