import { Component, OnInit } from '@angular/core';
import {TableServiceService} from '../table-service.service';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor(private _detail:TableServiceService) { }

  value:any;
  header;

getValue()
{
  this.value=this._detail.getData();
  this.header=Object.keys(this.value[0]);
}
  ngOnInit() {
    this._detail.setData();
  }
  flag:boolean;
  sortData(params) {
     if (this.flag) {
         this.value.sort(function (a, b) {
             var textA = a[params] ;
             var textB = b[params];
             if (textA < textB)
                 return -1;
             if (textA > textB)
                 return 1;
 
             return 0;
         })
         this.flag = false;
     } else {
       this.value.sort(function (a, b) {
             var textA = a[params];
             var textB = b[params];
             if (textA < textB)
                 return 1
             if (textA > textB)
                 return -1
             return 0;
         })
         this.flag = true;
     }
 }

}
