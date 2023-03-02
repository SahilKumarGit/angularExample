import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private afm: AngularFireMessaging, private swPush: SwPush) { }

  currentMessage = new BehaviorSubject<any>(null);

  requestPermission() {
    this.afm.requestToken
      .subscribe({
        next: (token: any) => { console.log('Permission granted!', { token }); },
        error: (err: any) => { console.error(err); }
      })
  }

  reciveMessaging() {
    this.afm.messages
      .subscribe((payload) => {
        console.log({ payload });
        this.currentMessage.next(payload);
      });
  }

  notificationClicks() {
    console.log(this.swPush)
    this.swPush.notificationClicks.subscribe(click => console.log('notification click', click));
  }
}
