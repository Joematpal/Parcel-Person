import template from './httpMain.html'

export default {
  template,
  controller(){
    this.currentHttp = {
      title: "Bullshavick"
    };
    console.log(this.currentHttp)
  }
}
