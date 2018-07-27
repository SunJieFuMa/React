import AppDispatcher from '../dispatcher/AppDispatcher'

let ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },


};

 export default ButtonActions;
