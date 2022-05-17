import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  addx: any ;
  addy: any ;
  addResult: any;
  item: any;
  Result: any;

  constructor(private sharedService: SharedService) { 
}

addition(){
   this.addResult = this.addx + this.addy;
   this.sharedService.addsendMessage(this.addResult)
}
  ngOnInit(): void {
    
    }
 }
