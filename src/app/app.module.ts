import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MagicSearchComponent } from './magic-search/magic-search.component';
import { SearchService } from './shared/search.service';
import { SearchPipe } from './shared/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MagicSearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
