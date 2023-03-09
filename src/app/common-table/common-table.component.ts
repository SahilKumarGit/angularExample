import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TableStructureType = {
  title: string,
  key: string,
  type?: TableTypesEnum,
  actions?: TableClicksType[],
  middleware?: Function
}

export type TableClicksType = {
  title: string,
  icon: string,
  action: Function
}

export enum TableTypesEnum {
  string = 'string',
  badge = 'badge',
  switch = 'switch',
  status = 'status',
}


@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent {
  ASC = true;
  @Input() tableStructure: TableStructureType[] = [];
  @Input() tableDate: { [key: string]: any }[] = [];

  @Output() sort = new EventEmitter<{ key: string, sort: number } | undefined | null>()
  @Output() doubleClick = new EventEmitter<{ [key: string]: any }>()

  sortBy(key: string) {
    this.sort.emit({ key, sort: this.ASC ? 1 : -1 })
    this.ASC = !this.ASC
  }

  onDoubleClick(data: { [key: string]: any }, index: number) {
    this.doubleClick.emit(data)
  }
}
