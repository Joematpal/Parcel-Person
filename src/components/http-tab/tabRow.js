import template from './tabRow.html'

export default {
  // transclude:true ,
  bindings: {
    setCurrentTab: '&'
  },
  require: {
    parent: '^httpMain'
  },
  template,
  controller(){
    this.tabs = [{
      url:'test'
    }];
    // this.$onChanges = (changes) =>{
    //   console.log(changes)
    // }
    this.$onInit = function() {
      this.updateTab = function (event) {
        console.log('event', event)
        console.log(this.parent)
        this.parent.currentHttp = event.tab;
      };
    }


  }
}
