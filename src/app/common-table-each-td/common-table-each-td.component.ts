import { Component, Input } from '@angular/core';
import { TableStructureType } from '../common-table/common-table.component';

@Component({
  selector: 'app-common-table-each-td',
  templateUrl: './common-table-each-td.component.html',
  styleUrls: ['./common-table-each-td.component.scss']
})
export class CommonTableEachTDComponent {
  @Input() eachTableStructure: TableStructureType = { title: '', key: '' };
  @Input() eachTableDate: { [key: string]: any } = {};
  @Input() index: number = -1;

  getItem(each: { [key: string]: any }, structure: TableStructureType) {
    const keys: string[] = structure.key.split('.');
    if (keys.length <= 1) return each[keys[0]] || undefined;
    let value = undefined;
    for (let i = 0; i < keys.length; i++) {
      if (value) value = value[keys[i]]
      else value = each[keys[i]]
    }
    return value;
  }

  actionClick(data: { [key: string]: any }, structure: TableStructureType, index: number) {
    if (structure.actions && structure.actions.length == 1) structure.actions[0].action(data, index);
  }

  onClickBtn(fn: Function) {
    fn(this.eachTableDate, this.index)
  }
}
