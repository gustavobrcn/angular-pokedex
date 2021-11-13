import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenPageComponent } from './layout/components/pages/gen-page/gen-page.component';
import { MainPageComponent } from './layout/components/pages/main-page/main-page.component';
import { SearchPageComponent } from './layout/components/pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'search/:nameOrId', component: SearchPageComponent },
  { path: 'gen/:genNum', component: GenPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
