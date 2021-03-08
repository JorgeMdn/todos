import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './pages/products/products.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from 'src/app/@shared/shared.module';

const MODULES = [CommonModule, ProductRoutingModule, SharedModule];

const COMPONENTS = [ProductComponent, ListComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class ProductModule {}
