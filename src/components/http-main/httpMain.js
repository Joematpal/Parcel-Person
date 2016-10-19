import template from './httpMain.html'

export default {
  template,
  controller(){
    this.currentHttp = {
      url: "Enter request URL"
    };
  }
}
