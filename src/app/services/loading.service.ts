import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  public style =  { display: 'none' }
  openLoading = ()=>{
    this.style = { display: 'block' }
  }
  closeLoading = ()=>{
    this.style = { display: 'none' }
  }
}
