import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SuiModule } from 'ng2-semantic-ui/ng2-semantic-ui';

import { AppComponent, ArticleComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiModule
  ],
  providers: [
    
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
