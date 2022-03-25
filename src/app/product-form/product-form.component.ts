import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private ps: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }
  product = {
    id: '',
    name: '',
    price: '',
    desc: ''
  }
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']
    this.ps.getProductById(this.id).subscribe(data => {
      this.product = data
    })
  }
  id: any
  onSubmit(data: any) {

    if (this.id === undefined) {
      this.ps.addProduct(data).subscribe(data => {
        this.router.navigateByUrl('/product')
      })
    } else {
      this.ps.updateProduct(this.id, data).subscribe(data => {
        this.router.navigateByUrl('/product')
      })
    }

  }

}
