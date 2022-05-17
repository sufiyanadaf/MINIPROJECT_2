import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent implements OnInit {
  multx: any ;
  multy: any ;
  multResult: any;
  item: any;
  constructor(private sharedService: SharedService) { 
    
  }
  multiplication(){
    this.multResult = this.multx * this.multy
    this.sharedService.multsendMessage(this.multResult)
  }

  ngOnInit(): void {
    
  }

 
}
