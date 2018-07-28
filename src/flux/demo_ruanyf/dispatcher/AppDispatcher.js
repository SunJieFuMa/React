import {Dispatcher} from 'flux'
import ListStore from '../stores/ListStore'
let AppDispatcher = new Dispatcher();

// 方法用来登记各种Action的回调函数
AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    default:
  }
});

export default AppDispatcher;