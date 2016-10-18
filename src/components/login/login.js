import template from './login.html'

export default {
  template,
  controller(mainFctry, $http){
    this.login = login;

    function login($http){
      mainFctry.login().then(function(results){
        console.log(results)
      })
    }
  }
}
