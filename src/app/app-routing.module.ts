import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import { ListCardComponent } from './pages/list-card/list-card.component';

const routes: Routes = [
  {
    path: '', component: ListCardComponent,
  },
  {
    path: 'card/:id', component: DetailCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
