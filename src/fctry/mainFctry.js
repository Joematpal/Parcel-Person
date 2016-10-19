export default function ($http, $q){
  return {
    test:'test',
    currentUser: {},
    login
  }

  function login(){
    return $http.get('http://localhost:5050/auth')
  }
  function addTab(){
    return $http.put()
  }
}
