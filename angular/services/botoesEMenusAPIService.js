angular.module("demandas").factory("botoesAPI", function () {

    var _getBotoes = function(){
        return botoesTopo = [
            {nome: "Subway", pedidos: "152", cor: 'aqua'},
            {nome: "Spoleto", pedidos: "132", cor:'green'},
            {nome: "Conveniencia", pedidos: "98", cor:'yellow'},
            {nome: "Drogaria", pedidos: "98", cor:'red'},
        ];
    };

    return{
        getBotoes:_getBotoes()
    };
});