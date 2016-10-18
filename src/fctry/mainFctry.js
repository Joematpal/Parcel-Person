export default function ($http, $q){
  return {
    test:'test',
    login
  }

  function login(){
    return $http.get('http://localhost:5050/auth/google')
  }
}
