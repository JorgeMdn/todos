import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/@core/services/utils.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ProductsInterface } from '../../data/product.interface';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    public _productsService: ProductsService,
    private _router: Router,
    private _authService: AuthService,
    private _utils: UtilsService
  ) {}

  ngOnInit() {}

  edit = (product: ProductsInterface, i: number) => {
    this._router.navigate(['/', 'products', 'product'], {
      queryParams: {
        action: 'e',
        index: i,
      },
    });
  };
  delete = (product: ProductsInterface, i: number) => {
    this._productsService.list.splice(i, 1);
    this._utils.toast('Producto eliminado con exito.');
  };
  add = () => {
    this._router.navigate(['/', 'products', 'product'], {
      queryParams: {
        action: 'a',
      },
    });
  };
  logout = () => {
    this._authService.logout();
    this._utils.toast('Ha cerrado sesión.');
  };
}
