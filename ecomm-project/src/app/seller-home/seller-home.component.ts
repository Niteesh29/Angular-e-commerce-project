import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  faTrash = faTrash
  faEdit = faEdit
  products : undefined | Product[]
  deteProductMessage:undefined | string;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.getProductList()
  
  }

  deteProduct(id:number)
  {
    this.productService.deleteProduct(id).subscribe((res)=> 
    {
      if(res)
      {
        this.deteProductMessage = "Product has been deleted successfully";
        this.getProductList()
      }
      setTimeout(() => {
        this.deteProductMessage = "";
      }, 3000);
    }
  
    )
  }

  getProductList()
  {
    this.productService.getProductList().subscribe((res)=> 
      {
        this.products = res
      })
  }

}
