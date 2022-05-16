import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent implements OnInit {
  multx: any = 4;
  multy: any = 6;
  multResult: any;
  item: any;
  constructor(private sharedService: SharedService) { 
    this.multResult = this.multx * this.multy
  }

  ngOnInit(): void {
    this.sharedService.sendMessage(this.multResult)
  }

 
}
