import { bindable } from 'aurelia-framework';
import {Todo} from '../../interfaces/Todo';

export class ToDoItemComponent {
  @bindable todo: Todo;
}
