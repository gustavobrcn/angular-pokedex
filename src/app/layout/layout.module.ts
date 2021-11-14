import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { GenPageComponent } from './components/pages/gen-page/gen-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { SelectedComponent } from './components/selected/selected.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    GenPageComponent,
    SearchPageComponent,
    MainPageComponent,
    PokeCardComponent,
    SelectedComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatListModule,
    RouterModule,
    MatGridListModule,
  ],
  exports: [HeaderComponent, SidebarComponent],
})
export class LayoutModule {}
