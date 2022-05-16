import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    displayMessage: any;
    r_message : any;
  constructor() { }
  sendMessage(s_message:any){
     if(s_message!== null && s_message!==undefined){
        this.displayMessage = s_message
     }else{
       return
     }
     console.log(this.displayMessage) 
  }


recieveMessage(){
    return this.r_message = this.displayMessage
}
}

