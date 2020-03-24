import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MygroupComponent } from './mygroup/mygroup.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { GroupsComponent } from './groups/groups.component';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'login',
            component: LoginComponent
        } , {
            path: 'register',
            component: RegisterComponent
        },
        
        {
            path: 'mygroup',
            component: MygroupComponent
        }
        ,
        {
            path: 'creategroup',
            component: CreategroupComponent
        }
        , 
        ,
        {
            path: 'groups',
            component: GroupsComponent
        }
        ,]
    }
];
