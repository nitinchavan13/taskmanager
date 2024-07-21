import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'taskFilter',
  standalone: true,
})
export class TaskFilterPipe implements PipeTransform {
  transform(items: Task[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item.Status.indexOf(filter) !== -1);
  }
}
