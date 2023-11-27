import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {}
  async ngOnInit() {
    try {
      this.products = await lastValueFrom(this.productService.getProducts());
    } catch (error) {}
  }
  async removeProduct(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
    if (!confirm) return;

    try {
      await lastValueFrom(this.productService.removeProduct(id));
      this.products = this.products.filter((item) => item.id !== id);
      alert('Bạn xóa thành công');
    } catch (error) {}
  }
}
