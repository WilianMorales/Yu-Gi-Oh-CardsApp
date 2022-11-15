import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListCardComponent } from './pages/list-card/list-card.component';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';

import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { MarketNamePipe } from './pipes/market-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListCardComponent,
    DetailCardComponent,
    MarketNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
