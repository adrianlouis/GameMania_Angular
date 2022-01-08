import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private produtos: NoticiaService, private cart: CartService) { }

  itens: any

  wishlist: any [] = []

  storaged:any

  ngOnInit(): void {
    this.itens = this.cart.itemAdicionado

    // this.wishlist = this.produtos.wishlist

    // console.log(this.produtos.wishlist)

 

  }

  // onClick(){
  //   console.log(this.itens)
  // }

  

}
