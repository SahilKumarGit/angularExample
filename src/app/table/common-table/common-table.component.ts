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
  asc = true;
  selectedKey: string = '';
  allSelected: boolean = false;

  @Input() tableStructure: TableStructureType[] = [];
  @Input() tableDate: { [key: string]: any }[] = [];
  @Input() selected: { [key: number]: boolean } = {};

  @Output() sort = new EventEmitter<{ key: string, sort: number } | undefined | null>()
  @Output() doubleClick = new EventEmitter<{ [key: string]: any }>()
  @Output() selectionChange = new EventEmitter<{ [key: number]: boolean }>()

  ngOnInit() {
    console.log(this.selected)
  }

  sortBy(key: string) {
    if (this.selectedKey !== key) this.asc = false
    this.sort.emit({ key, sort: this.asc ? 1 : -1 })
    this.selectedKey = key
    this.asc = !this.asc
  }

  onDoubleClick(data: { [key: string]: any }, index: number) {
    this.doubleClick.emit(data)
  }

  onChangeSelection(index: number) {
    if (this.tableDate.length === 0) return;
    if (this.selected[index]) {
      delete this.selected[index];
    } else {
      this.selected[index] = true
    }
    this.selectionChange.emit(this.selected)
  }

  onChangeForAll() {
    if (this.tableDate.length === 0) return;
    if (this.objectLength(this.selected) !== this.tableDate.length) {
      this.selected = {}
      for (let i = 0; i < this.tableDate.length; i++) {
        this.selected[i] = true;
      }
    } else {
      this.selected = {}
    }
    this.selectionChange.emit(this.selected)
  }

  objectLength(obj: Object) {
    return Object.keys(obj).length
  }
}
