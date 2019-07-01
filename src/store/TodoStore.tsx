import { observable, action, computed } from 'mobx'
import uuidv1 from 'uuid/v1'

class TodoStore {
  @observable todoList: Array<TodoModel> = [
    { id: uuidv1(), title: '标题1', checked: false, createAt: 1561473966283 },
    { id: uuidv1(), title: '标题2', checked: false, createAt: 1561473966284 },
    { id: uuidv1(), title: '标题3', checked: false, createAt: 1561473966285 },
  ]

  @observable todoItemSortableEnable: boolean = false

  @computed get checkedList(): Array<TodoModel> {
    return this.todoList.filter(
      item => item.checked
    )
  }

  @computed get uncheckedList(): Array<TodoModel> {
    return this.todoList.filter(
      item => !item.checked
    )
  }

  @action.bound checkTodo(id: number): void {
    this.todoList = this.todoList.map(
      item => item.id === id ? { ...item, checked: !item.checked } : item
    )
  }

  @action.bound
  addTodo(title: string): void {
    const item = this.generateTodoItemByTitle(title)
    this.todoList.unshift(item)
  }

  @action.bound
  deleteTod(id: number) {
    this.todoList = this.todoList.filter(
      item => item.id !== id
    )
  }

  generateTodoItemByTitle(title: string): TodoModel {
    return {
      id: uuidv1(),
      title,
      checked: false,
      createAt: Date.now()
    }
  }

}

const todo = new TodoStore()
export {
  todo,
  TodoStore
}
