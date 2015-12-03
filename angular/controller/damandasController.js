app.controller("demandasController", function($scope){

    $scope.botoesTopo = botoesTopo = [
        {nome: "Subway", pedidos: "152", cor: 'aqua'},
        {nome: "Spoleto", pedidos: "132", cor:'green'},
        {nome: "Conveniencia", pedidos: "98", cor:'yellow'},
        {nome: "Drogaria", pedidos: "98", cor:'red'},
    ];

    $scope.menusSistema = [
        {nome: "Gerenciar Pedidos", pagina: "/lista", cor: 'aqua'},
        {nome: "Relatorio", pagina: "/", cor:'green'},
        {nome: "usuarios", pagina: "/", cor:'yellow'},
    ];
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {templateUrl: "angular/templates/botoesPainelControle.html", controller: "damandasController"})
        .when("/lista", {templateUrl: "angular/templates/listagem.html", controller: "damandasController"});
}]);


app.controller('damandasController', function ($scope, $location) {

});





