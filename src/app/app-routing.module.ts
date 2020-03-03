import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from 'src/app/list/list.component';
import { DetailComponent } from 'src/app/detail/detail.component';


const routes: Routes = [{
  path: '',
  component: ListComponent
}, {
  path: ':id',
  component: DetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
