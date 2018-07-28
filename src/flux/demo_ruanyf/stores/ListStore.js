import EventEmitter from 'events'
import assign from 'object-assign'
// 存放所有数据
let ListStore = assign({}, EventEmitter.prototype, {
  items: [], //保存条目

  getAll: function () { // 获取说有条目
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () { //发出一个"change"事件
    this.emit('change');
  },
    //绑定change事件，和回调函数，接收到事件，执行回调函数
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

export default ListStore;