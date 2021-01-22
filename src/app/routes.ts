import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'

import{ EventsListComponent,   EventDetailsComponent, EventListResolver, EventRouteActivator, CreateEventComponent, CreateSessionComponent } from './events/index'


import { UserModule } from './user/user.module'

export const appRoutes:Routes = [
    {path:'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}}, 
    {path:'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]}, 
    {path:'404', component: Error404Component}, 
    {path: '', redirectTo: '/events', pathMatch: 'full'}, 
    {path: 'events/session/new', component:CreateSessionComponent},
    {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
]