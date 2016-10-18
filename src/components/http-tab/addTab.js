import template from './addTab.html'
import httpTab from './httpTab.html'

export default {
  // transclude: true,
  bindings: {

  },
  require:{
    parent:"^tabRow"
  },
  template,
  controller(){
    let self = this;

    self.addTab = addTab;


//============================================================================//
    function addTab(){
      self.$onInit = function(){
        self.parent.tabs.push({title:'Add Url'})
        console.log(self.parent.tabs)
      }()
    }

//============================================================================//

  }
}
