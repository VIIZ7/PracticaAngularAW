import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatLineModule, MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenuComponent } from './menu/menu.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

const appRoutes: Routes=[
  {path:'inicio',component:InicioComponent},
  {path:'nosotros',component:NosotrosComponent},
{path:'menu', component:MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    MatLineModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule, 
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }