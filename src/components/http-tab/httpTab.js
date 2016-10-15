import template from './httpTab.html'

export default {
  template,
  bindings: {
    currentHttp: "<curr"
  },
  controller(){
    // this.currentHttp;
    console.log(this.currentHttp)
  }
}
