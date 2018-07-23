import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ContentService } from './shared/services/content.service';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsV4P1I7hfqCsZS-SXNhi9wIrqAXf2cJs'
    })
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
