import { Component } from '@angular/core';
import { NotificationService } from '../service/notification/notification.service';

@Component({
  selector: 'app-fcm',
  templateUrl: './fcm.component.html',
  styleUrls: ['./fcm.component.scss']
})
export class FCMComponent {
  message: any = null
  constructor(private notify: NotificationService) {
    // this.notify.notificationClicks();
  }
  ngOnInit() {
    this.notify.reciveMessaging();
    this.message = this.notify.currentMessage;
  }

  reqPer() {
    console.log(Notification.permission)
    if (Notification.permission === "granted") return alert('already have permission!')
    this.notify.requestPermission();
  }


}
