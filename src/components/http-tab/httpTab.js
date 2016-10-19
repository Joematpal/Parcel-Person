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

    let self = this;

    // self.currentHttp = {url:"Something"};
    self.deleteTab = deleteTab;

    function deleteTab(index){
      self.parent.tabs.splice(index, 1)
    }


  }
}
