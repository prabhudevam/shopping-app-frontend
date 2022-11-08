import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
x:product;
id:Number;
  constructor(public activatedRoute:ActivatedRoute,public http:HttpClient ) { }

  ngOnInit(): void {
    let idparam=this.activatedRoute.snapshot.paramMap.get('id');
    this.id=idparam?+idparam:0;
    this.http.get<any>(`http://localhost:8080/api/product/getProd/${this.id}`).subscribe(
      data=>{
    this.x=data;
    console.log(data);
      }
    )  }

}
