import AppDispatcher from '../dispatcher/AppDispatcher'

let ButtonActions = {
//使用AppDispatcher，把动作ADD_NEW_ITEM派发到Store
  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });

  },


};
 export default ButtonActions;