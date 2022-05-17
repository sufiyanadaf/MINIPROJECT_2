import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  divx: any ;
  divy: any ;
  divResult: any;
  item: any;
  constructor(private sharedService: SharedService) {
   }
  division(){
    this.divResult = this.divx / this.divy
    this.sharedService.divsendMessage(this.divResult)
  }
  ngOnInit(): void {
    
  }

 
}
