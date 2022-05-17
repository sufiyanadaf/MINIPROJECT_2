import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    adddisplayMessage: any;
    addr_message : any;
    subdisplayMessage: any;
    subr_message : any;
    multdisplayMessage: any;
    multr_message : any;
    divdisplayMessage: any;
    divr_message : any;
  constructor() { }
  addsendMessage(s_message:any){
     if(s_message!== null && s_message!==undefined){
        this.adddisplayMessage = s_message
     }else{
       return
     }
     console.log(this.adddisplayMessage) 
  }
  subsendMessage(s_message:any){
    if(s_message!== null && s_message!==undefined){
       this.subdisplayMessage = s_message
    }else{
      return
    }
    console.log(this.subdisplayMessage) 
 }
 multsendMessage(s_message:any){
  if(s_message!== null && s_message!==undefined){
     this.multdisplayMessage = s_message
  }else{
    return
  }
  console.log(this.multdisplayMessage) 
}
divsendMessage(s_message:any){
  if(s_message!== null && s_message!==undefined){
     this.divdisplayMessage = s_message
  }else{
    return
  }
  console.log(this.divdisplayMessage) 
}


addrecieveMessage(){
    return this.addr_message = this.adddisplayMessage
}
subrecieveMessage(){
  return this.subr_message = this.subdisplayMessage
}
multrecieveMessage(){
  return this.multr_message = this.multdisplayMessage
}
divrecieveMessage(){
  return this.divr_message = this.divdisplayMessage
}
}


