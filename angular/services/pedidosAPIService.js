angular.module("demandas").factory("pedidosAPI", function () {
    var _getPedidos = function () {
        return pedidos = [
            {cod: "01", cliente: "Joao", loja: "Subway", status: "Pendente", label: "danger"},
            {cod: "02", cliente: "Joao", loja: "Spoleto", status: "Entregue", label: "success"},
            {cod: "03", cliente: "Joao", loja: "Subway", status: "Entregue", label: "success"},
            {cod: "04", cliente: "Joao", loja: "Spoleto", status: "Pendente", label: "danger"},
            {cod: "05", cliente: "Joao", loja: "Spoleto", status: "Entregue", label: "success"},
            {cod: "06", cliente: "Joao", loja: "Subway", status: "Entregue", label: "success"},
            {cod: "07", cliente: "Joao", loja: "Spoleto", status: "Pendente", label: "danger"},
        ];
    };

    var _savePedido = function (pedido) {
        pedidos.push(pedido);
        return true;
        delete pedidos.pedido;
        //$location.path("/lista")
    };

    return {
        getPedidos: _getPedidos(),
        saveContato: _savePedido()
    };
});