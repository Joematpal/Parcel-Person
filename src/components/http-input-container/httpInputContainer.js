import template from './httpInputContainer.html'

export default {
  template,
  bindings: {
    currentHttp: '<current'
  },
  controller(){
    console.log('http-input-container', this.currentHttp)
  }
}
