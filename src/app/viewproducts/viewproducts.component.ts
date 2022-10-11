import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
x:product;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
call(){
this.http.get<product>("http://localhost:8080/api/product/all").subscribe(
  data=>{
    this.x=data;
  }
)
}
}
