
const ApplicationConfiguration = (function () {
    const registerModule = function (moduleName, dependencies) {
      angular.module(moduleName, dependencies || [])
    }
    return { registerModule }
})()
  

ApplicationConfiguration.registerModule("app")
angular.module('app').controller('appController',['$scope', function ($scope) {
    console.log("hello")
}])
