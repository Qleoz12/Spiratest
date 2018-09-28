import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';
import { DragDropComponent } from './examples/drag-drop/drag-drop.component';
import { OverlayCoolEfectsComponent } from './examples/overlay-cool-efects/overlay-cool-efects.component';


const app_routes: Routes=[
  {path:'home',component:DragDropComponent },
  {path:'about',component:OverlayCoolEfectsComponent },
  {path:'**',pathMatch:'full',redirectTo:'home' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  declarations: [],
  providers: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
