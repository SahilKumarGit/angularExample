import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularExample';
  constructor(private updates: SwUpdate, private swPush: SwPush) {
    updates.available.subscribe(_ => updates.activateUpdate().then(() => {
      alert('reload for update');
      document.location.reload();
    })); 
    console.log(this.swPush.isEnabled)
    this.swPush.notificationClicks.subscribe(click => console.log('notification click', click));

  }
  
  ngOnInit() {
  }
}
