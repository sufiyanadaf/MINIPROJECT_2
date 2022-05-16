import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  addx: any = 12;
  addy: any = 2;
  addResult: any;
  item: any;
  Result: any;

  constructor(private sharedService: SharedService) { 
     this.addResult = this.addx + this.addy;
  }
  ngOnInit(): void {
    
     this.sharedService.sendMessage(this.addResult)
    
  }
 }
