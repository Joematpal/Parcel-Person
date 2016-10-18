import template from './tabRow.html'

export default {
  // transclude:true ,
  bindings: {
    cur: '<curr'
  },
  template,
  controller(){
    this.tabs = [{
      title:'test'
    }];

  }
}
