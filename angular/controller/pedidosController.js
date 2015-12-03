app.controller("pedidosController", function ($scope, $http) {
    $scope.adicionarPedido = function (persons) {
        $.ajax({
            type: "GET",
            url: "http://localhost/angular/persons/create",
            data: persons,
            dataType: 'json',
            success: function (data) {
                delete $scope.persons;
                $scope.contatoForm.$setPristine();
                carregarpedidos();
            }
        });
    };
    $scope.classe = "selecionado";

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isSelecionados = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    var carregarpedidos = function () {
        $http.get("http://localhost/angular/persons/all").success(function (data) {
            $scope.pedidos = data;
        });
    };

    carregarpedidos();

});



