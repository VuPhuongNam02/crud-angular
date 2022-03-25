import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "product/create",
    component: ProductFormComponent
  },
  {
    path: "product/edit/:id",
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
