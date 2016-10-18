import template from './httpTab.html'

export default {
  template,
  require:{
    parent: "^tabRow"
  },
  bindings: {
    // currentHttp: "<curr"
    setCurrentTab: '&',
    tab: '=repeatTab'
  },
  controller(){

    let something = this;

    console.log(this.tab)
    something.$onInit = function(){
      console.log(something.parent)
    }

  }
}
