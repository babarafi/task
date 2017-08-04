import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component yang telah dibuat
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OverviewComponent } from './overview/overview.component';
import { FollowingComponent } from './following/following.component';
import { FollowerComponent } from './follower/follower.component';
import { StarsComponent } from './stars/stars.component';
import { RepositoriesComponent } from './repositories/repositories.component';
// konfigurasi route
export const routes: Routes = [
//  { path: 'home', component: HomeComponent },
//  { path: 'user', component: UserComponent },
 { path: 'Overview', component: OverviewComponent },
 { path: 'Following', component: FollowingComponent },
 { path: 'Follower', component: FollowerComponent },
 { path: 'Stars', component: StarsComponent },
 { path: 'Repositories', component: RepositoriesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);