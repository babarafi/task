import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CreateComponent } from '../create/create.component';
import { ListUserComponent } from '../list-user/list-user.component';

const routes: Routes = [
    {   
        path:'',
        redirectTo:'create',
        pathMatch:'full'
    },
    {path: 'create', component:CreateComponent},
    {path: 'list', component:ListUserComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyNewRouting { }