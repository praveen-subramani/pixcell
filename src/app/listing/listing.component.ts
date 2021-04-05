import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import * as converter from 'number-to-words';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  hide: boolean =false;

india()
{
  this.server.ind=true;
  this.server.cit=false;
  this.server.heat=false;
  this.rout.navigate(['./detail']) 
}
city()
{
  this.server.ind=false;
  this.server.cit=true;
  this.server.heat=false;
  this.rout.navigate(['./detail']) 
}
health()
{
  this.server.ind=false
  this.server.heat=true;
  this.server.cit=false;
  this.rout.navigate(['./detail'])
}
// demo start
number:any;
mynumber:number=0;
  outputWords=''
  convertToWord(){
    if(this.mynumber < 100000 ){
    this.outputWords= converter.toWords(this.mynumber);
    this.hide=false;
  }else{
    this.outputWords="";
    this.hide=true;
  }

  }

  constructor(public rout:Router, public server:DataService) { }

  ngOnInit(): void {

  }

}
