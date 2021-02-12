import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule   } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocieteListeComponent } from './societe-liste/societe-liste.component';
import { SocieteItemComponent } from './societe-liste/societe-item/societe-item.component';
import { SocieteEditComponent } from './societe-liste/societe-edit/societe-edit.component';
import { CompteListeComponent } from './compte-liste/compte-liste.component';
import {SocieteListeService} from './societe-liste/societe-liste.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocieteListeComponent,
    SocieteItemComponent,
    SocieteEditComponent,
    CompteListeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SocieteListeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
