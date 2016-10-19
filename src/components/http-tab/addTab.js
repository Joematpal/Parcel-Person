import template from './addTab.html'
import httpTab from './httpTab.html'

export default {
  // transclude: true,
  bindings: {
    tabs:'=getTabs'
  },
  require:{
    parent:"^tabRow"
  },
  template,
  controller(mainFctry){
    let self = this;

    self.addTab = addTab;

//============================================================================//

    self.$onChanges = (changes) => {
      if (changes.tabs){
      console.log(changes.tabs.currentValue)
      this.tabs = angular.copy(changes.tabs.currentValue)
      }
    }

//============================================================================//
    function addTab(){

      // console.log(self.parent.tabs)
      // self.$onInit = function(){
      //   self.parent.tabs.push({url:'New Tab'})
      //   console.log(self.parent.tabs)
      // }()

      self.tabs.push({url:'new tab'})

      self.tabs.forEach((ele, ind)=>{
        ele.index = ind;
      })

      self.parent.tabs = self.tabs
      console.log(self.parent.tabs)



    }


//============================================================================//

  }
}
