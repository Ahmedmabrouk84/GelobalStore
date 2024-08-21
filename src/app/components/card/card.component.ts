import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Iproduct } from '../../core/iproduct';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  _DataService = inject( DataService)

  productList:Iproduct[]=[]

ngOnInit(): void {
  this._DataService.gitProducts().subscribe({

    next:(respons)=>{
      this.productList = respons;
    console.log(respons);
    },
    error:(err)=>{
      console.log(err);
      }
  })
}

}
