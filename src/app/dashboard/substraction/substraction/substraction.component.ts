import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.scss']
})
export class SubstractionComponent implements OnInit {
  subx: any ;
  suby: any ;
  subResult: any;
  item: any;
  constructor(private sharedService: SharedService) { 
    
  }

  substraction(){
    this.subResult = this.subx - this.suby;
    this.sharedService.subsendMessage(this.subResult)
  
  }

  ngOnInit(): void {
    
  }

  
}
