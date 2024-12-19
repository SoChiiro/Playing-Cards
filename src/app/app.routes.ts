import { Routes } from '@angular/router';
import { CreaturesListComponent } from './pages/creatures-list/creatures-list.component';
import { CreaturesComponent } from './pages/creatures/creatures.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [{
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
},
{
    path:'home',
    component: CreaturesListComponent
},
{
    path:'creature',
    children: [{
        path:'',
        component:CreaturesComponent
    },
    {
        path:':id',
        component: CreaturesComponent
    }]
}, 

{
    path:'**',
    component:NotFoundComponent
}

];
