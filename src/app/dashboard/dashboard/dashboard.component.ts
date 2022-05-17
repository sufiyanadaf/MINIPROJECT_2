import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   addresult: any;
   subresult: any;
   multresult: any;
   divresult: any;
  constructor(private router: Router,
    private sharedService: SharedService) { }
    addResult: any
 
  ngOnInit(): void {
    this.addresult=this.sharedService.addrecieveMessage();
    this.subresult=this.sharedService.subrecieveMessage();
    this.multresult=this.sharedService.multrecieveMessage();
    this.divresult=this.sharedService.divrecieveMessage();
    console.log(this.sharedService.addrecieveMessage());
    console.log(this.sharedService.subrecieveMessage());
    console.log(this.sharedService.multrecieveMessage());
    console.log(this.sharedService.divrecieveMessage());
    }
}
