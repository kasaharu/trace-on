import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MogmogComponent } from './components/mogmog/mogmog.component';
import { TopComponent } from './components/top/top.component';
import { MogmogHeaderComponent } from './components/mogmog-header/mogmog-header.component';
import { MogmogCoverImageComponent } from './components/mogmog-cover-image/mogmog-cover-image.component';
import { MogmogPopularMenuListComponent } from './components/mogmog-popular-menu-list/mogmog-popular-menu-list.component';
import { MogmogSearchCardComponent } from './components/mogmog-search-card/mogmog-search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MogmogComponent,
    TopComponent,
    MogmogHeaderComponent,
    MogmogCoverImageComponent,
    MogmogPopularMenuListComponent,
    MogmogSearchCardComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
