import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { GroceryComponent } from './components/grocery/grocery.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'grocery', component: GroceryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
