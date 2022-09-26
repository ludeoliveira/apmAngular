import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductsDetailComponent } from './products-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductsDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [ProductsDetailGuard],
        component: ProductsDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
