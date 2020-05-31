import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu/menu-items.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { ContactUsComponent } from './contactus/contactus.component';

const appRoutes: Routes = [
{path : 'home' , component : HomeComponent},
{path : 'contactus' , component : ContactUsComponent},
{path : '' , redirectTo  : '/home', pathMatch : 'full'},
{path : '**' , component : PageNotFoundComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
     HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
