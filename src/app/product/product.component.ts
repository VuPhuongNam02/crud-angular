import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private ps: ProductService
  ) { }

  products: any
  product = {
    id: '',
    name: '',
    price: '',
    desc: ''
  }

  ngOnInit(): void {
    this.getPro()
  }

  getPro() {
    this.ps.getProducts().subscribe(data => {
      this.products = data
    })
  }

  remove(id: number | string) {
    this.ps.deleteProduct(id).subscribe(data => {
      this.getPro()
    })
    // this.products = this.products.filter((item: any) => item.id != id)
  }
}
