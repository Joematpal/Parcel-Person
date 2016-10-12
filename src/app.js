import angular from 'angular'
import uiRouter from "angular-ui-router"
// import './css/master.css'

import '!style!css!sass!./main.scss'
import 'material-design-icons'

//components
// import httpMain from './components/http-main/httpMain'
import template from './components/http-main/httpMain.html'

angular.module('parcelman', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        // templateUrl: ''
      })
  })
  .component("simpleComponent", {
    template: "<h1> Hello World</h1>",
    controller(){
      console.log('you dirty man')
    }
  })
