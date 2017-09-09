import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CURDComponent } from './curd/curd.component';

import { CURDService } from './curd/curd.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CURDComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CURDService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ngFileSaverModule
// import { ngFileSaverModule } from 'angular-file-saver';