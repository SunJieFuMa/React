import AppDispatcher from "../dispatcher/AppDispatcher";
import { ADD_ITEM, REMOVE_ITEM, EVENT_CHANGE } from "../Constants";
import { EventEmitter } from "events";

let _store = {
  list: []
};

let addItem = function(item) {
  _store.list.push(item);
};

let removeItem = function(index) {
  _store.list.splice(index, 1);
};

let todoStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(EVENT_CHANGE, cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener(EVENT_CHANGE, cb);
  },
  getList: function() {
    return _store.list;
  }
});

AppDispatcher.register(function(action) {
  switch (action.type) {
    case ADD_ITEM:
      addItem(action.payload);
      todoStore.emit(EVENT_CHANGE);
      break;
    case REMOVE_ITEM:
      removeItem(action.payload);
      todoStore.emit(EVENT_CHANGE);
      break;
    default:
      return true;
  }
});

export default todoStore;
