import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  divx: any = 12;
  divy: any = 3;
  divResult: any;
  item: any;
  constructor(private sharedService: SharedService) {
    this.divResult = this.divx / this.divy
   }

  ngOnInit(): void {
    this.sharedService.sendMessage(this.divResult)
  }

 
}
