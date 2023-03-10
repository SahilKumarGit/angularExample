import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { SwPush } from '@angular/service-worker';
import { TableStructureType, TableTypesEnum } from './table/common-table/common-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularExample';
  selected: { [key: number]: boolean } = {}
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
      title: "User ID",
      key: "userid",
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
      title: "Status",
      key: "status",
      type: TableTypesEnum.switch,
      actions: [{
        icon: '',
        title: 'switch',
        action: (result: any, index: number) => {
          console.log(result['status'] = !result['status'])
          this.change()
        },
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
          this.selected = {}
          this.change()
        }
      }, {
        title: 'Delete',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          console.log("all good!")
          this.data.splice(index, 1)
          this.selected = {}
          this.change()
        }
      }, {
        title: 'View',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          console.log("all good!")
          response['phone'] = "0000000000"
          this.selected = {}
          this.change()
        }
      }, {
        title: 'Duplicate',
        icon: '.shs',
        action: (response: { [key: string]: any }, index: number) => {
          this.data.push(JSON.parse(JSON.stringify(response)))
          this.selected = {}
          this.change()
        }
      }]
    }
  ]

  data: any[] = []

  ngOnInit() {
    try {
      this.data = JSON.parse(localStorage.getItem('_') || '')
    } catch (error) {
      this.data = [
        {
          _id: '1',
          name: {
            fname: "sahil Kumar",
            lname: "sahoo",
          },
          email: "email.sahil@yahoo.com",
          phone: "9658852281",
          userid: "od.le.io.ppi",
          status: true
        },
        {
          _id: '2',
          name: {
            fname: "sahil Kumar",
            lname: "sahoo"
          },
          email: "email.sahil@yahoo.com",
          phone: "9658852281",
          userid: "od.le.io.ppi",
          status: true
        },
        {
          _id: '3',
          name: {
            fname: "sahil Kumar",
            lname: "sahoo"
          },
          email: "email.sahil@yahoo.com",
          phone: "9658852281",
          userid: "od.le.io.ppi",
          status: true
        },
        {
          _id: '4',
          name: {
            fname: "sahil Kumar",
            lname: "sahoo"
          },
          email: "email.sahil@yahoo.com",
          phone: "9658852281",
          userid: "od.le.io.ppi",
          status: true
        },
        {
          _id: '5',
          name: {
            fname: "sahil Kumar",
            lname: "sahoo"
          },
          email: "email.sahil@yahoo.com",
          phone: "9658852281",
          userid: "od.le.io.ppi",
          status: true
        },
        {
          _id: '6',
          name: {
            fname: "sahil Kumar",
            lname: "sahoo"
          },
          email: "email.sahil@yahoo.com",
          phone: "9658852281",
          userid: "od.le.io.ppi",
          status: true
        },
        {
          _id: '7',
          name: {
            fname: "sahil Kumar",
            lname: "sahoo",
          },
          email: "email.sahil@yahoo.com",
          phone: "9658852281",
          userid: "od.le.io.ppi",
          status: true
        }
      ]
    }
  }

  change() {
    localStorage.setItem('_', JSON.stringify(this.data))
  }

  click(str: string, result: any) {
    console.log(str, result)
  }
}
