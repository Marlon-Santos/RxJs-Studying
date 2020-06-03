import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestxComponent } from './testx/testx.component';
import { TestyComponent } from './testy/testy.component';

const routes: Routes = [
  {
    path: 'testx',
    component: TestxComponent,
  },
  {
    path: 'testy',
    component: TestyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
