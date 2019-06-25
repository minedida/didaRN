import {observable, action} from 'mobx'

class TodoStore {
  @observable count = 10

  @action.bound increment(): void {

  }

}

const todo = new TodoStore()
export {
  todo,
  TodoStore
}

