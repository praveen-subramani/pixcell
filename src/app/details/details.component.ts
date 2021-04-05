import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public ser:DataService,public rout:Router) { }
back(){
  this.rout.navigate(['./light'])
}

  ngOnInit(): void {
  }

}
