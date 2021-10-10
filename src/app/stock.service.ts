import { Injectable } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
const socketSubject = webSocket("ws://stocks.mnet.website");

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  initializeSocketService() {
    return socketSubject
  }
}
