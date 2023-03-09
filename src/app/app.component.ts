import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { SwPush } from '@angular/service-worker';
import { TableStructureType, TableTypesEnum } from './common-table/common-table.component';

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

  structure: TableStructureType[] = [
    {
      title: "First Name",
      key: "name.fname",
      type: TableTypesEnum.string
    },
    {
      title: "Last Name",
      key: "name.lname",
      type: TableTypesEnum.string
    },
    {
      title: "Email",
      key: "email",
      type: TableTypesEnum.string
    },
    {
      title: "Phone Number",
      key: "phone",
      type: TableTypesEnum.string,
      actions: [{
        title: 'Call',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          console.log("all good!")
          response['phone'] = "0000000000"
        }
      }, {
        title: 'SMS',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          console.log("all good!")
          response['phone'] = "0000000000"
        }
      }]
    },
    {
      title: "Action",
      key: "",
      type: TableTypesEnum.string,
      actions: [{
        title: 'Edit',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          console.log("all good!")
          response['phone'] = "0000000000"
        }
      }, {
        title: 'Delete',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          console.log("all good!")
          this.data.splice(index, 1)
        }
      }, {
        title: 'View',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          console.log("all good!")
          response['phone'] = "0000000000"
        }
      }, {
        title: 'Duplicate',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          this.data.push(response)
        }
      }]
    }
  ]

  data: any[] = [
    {
      name: {
        fname: "sahil Kumar",
        lname: "sahoo",
      },
      email: "email.sahil@yahoo.com",
      phone: "9658852281"
    },
    {
      name: {
        fname: "sahil Kumar",
        lname: "sahoo"
      },
      email: "email.sahil@yahoo.com",
      phone: "9658852281"
    },
    {
      name: {
        fname: "sahil Kumar",
        lname: "sahoo"
      },
      email: "email.sahil@yahoo.com",
      phone: "9658852281"
    },
    {
      name: {
        fname: "sahil Kumar",
        lname: "sahoo"
      },
      email: "email.sahil@yahoo.com",
      phone: "9658852281"
    },
    {
      name: {
        fname: "sahil Kumar",
        lname: "sahoo"
      },
      email: "email.sahil@yahoo.com",
      phone: "9658852281"
    },
    {
      name: {
        fname: "sahil Kumar",
        lname: "sahoo"
      },
      email: "email.sahil@yahoo.com",
      phone: "9658852281"
    },
    {
      name: {
        fname: "sahil Kumar",
        lname: "sahoo",
      },
      email: "email.sahil@yahoo.com",
      phone: "9658852281"
    }
  ]

  ngOnInit() {
  }

  doubleClick(result: any) {
    console.log(result)
  }
}
