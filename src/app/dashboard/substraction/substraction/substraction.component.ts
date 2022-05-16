import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.scss']
})
export class SubstractionComponent implements OnInit {
  subx: any = 18;
  suby: any = 8;
  subResult: any;
  item: any;
  constructor(private sharedService: SharedService) { 
    this.subResult = this.subx - this.suby
  }

  ngOnInit(): void {
    this.sharedService.sendMessage(this.subResult)
  }

  
}
