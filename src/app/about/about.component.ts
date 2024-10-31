import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/api/products/product.service';
import {ProductRepresentation} from '../services/api/products/product-representation';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  param: any;
  defaultPathParam: string = 'amico';
  defaultQueryParam: string = 'Angular';
  queryParams: any = '';

  ngOnInit(): void {
    this.productService.getAllProductsWithLimit()
      .subscribe({
        next: (data: Array<ProductRepresentation>) => {
          console.log(data);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }

      });

    const product: ProductRepresentation = {
      title: 'BIGGER THAN DICK OF YOUR BOYFRIEND',
      description: 'Big 40 cm dildo',
      price: 108,
      category: 'Sex Toys',
      image: 'https://sex.shop/dildo.jpg'
    }

    this.productService.createProduct(product)
      .subscribe({
        next: (data: ProductRepresentation) => {
          console.log(data);
        }
      });

    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParams = this.activatedRoute.snapshot.queryParams['course'];

    if (this.param === undefined || this.param === '') {
      this.param = this.defaultPathParam;
    }

    if (this.queryParams === undefined || this.param === '') {
      this.queryParams = this.defaultQueryParam;
    }
  }
}
