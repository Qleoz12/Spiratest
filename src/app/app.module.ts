import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DragDropComponent } from './examples/drag-drop/drag-drop.component';
//usar http
import { HttpClientModule } from '@angular/common/http';
import { OverlayCoolEfectsComponent } from './examples/overlay-cool-efects/overlay-cool-efects.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DragDropComponent,
    OverlayCoolEfectsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
