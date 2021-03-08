import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UtilsService } from 'src/app/@core/services/utils.service';
import { ProductsInterface } from '../../data/product.interface';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-task',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductComponent implements OnInit {
  action: string;
  product: ProductsInterface;
  index: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _productsService: ProductsService,
    private _utils: UtilsService
  ) {
    this._route.queryParamMap.subscribe((params: ParamMap) => {
      this.action = params.get('action');
      if (this.action == 'a') {
        this.product = {
          id: this._productsService.list.length + 1,
          title: '',
          description: '',
          price: 0,
          amount: 10,
        };
      }
      if (this.action == 'e') {
        let i = parseInt(params.get('index'));
        this.index = i;
        this.product = {
          id: this._productsService.list[i].id,
          title: this._productsService.list[i].title,
          description: this._productsService.list[i].description,
          price: this._productsService.list[i].price,
          amount: this._productsService.list[i].amount,
        };
      }
    });
  }

  ngOnInit() {}
  cancel = () => {
    this.product = {
      id: this._productsService.list.length + 1,
      title: '',
      description: '',
      price: 0,
      amount: 0,
    };
    this._router.navigate(['/', 'products']);
  };

  save = () => {
    if (this.action == 'a') {
      this._productsService.list.push(this.product);
      this._utils.toast('Producto creado con exito.');
    } else if (this.action == 'e') {
      this._utils.toast('Producto guardado con exito.');
      this._productsService.list[this.index] = this.product;
    }
    this._router.navigate(['/', 'products']);
  };
}
