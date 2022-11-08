import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
x1:product[]=[];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
call(){
this.http.get<any>("http://localhost:8080/api/product/all").subscribe(
  data=>{
this.x1=data;
console.log(data);
  }
)
}
}
