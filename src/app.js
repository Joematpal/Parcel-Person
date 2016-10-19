import angular from 'angular'
import uiRouter from "angular-ui-router"

import '!style!css!sass!./main.scss'

//modules
import mcResizer from './components/resizer'

//components
import httpMain from './components/http-main/httpMain.js'
import sideBar from './components/side-bar/sidebar.js'
import httpTab from './components/http-tab/httpTab.js'
import tabRow from './components/http-tab/tabRow.js'
import addTab from './components/http-tab/addTab.js'
import httpContainerHeaderTop from './components/http-container-header-top/httpContainerHeaderTop'
import login from './components/login/login.js'

//factorys
import mainFctry from './fctry/mainFctry'

angular.module('parcelperson', [uiRouter, mcResizer.name])

  .component("sideBar", sideBar)
  .component("httpMain", httpMain)
  .component('tabRow', tabRow)
  .component('httpTab', httpTab)
  .component('httpContainerHeaderTop', httpContainerHeaderTop)
  .component('addTab', addTab)
  .component('login', login)
  .factory('mainFctry', mainFctry)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        // templateUrl: ''
      })
  })
