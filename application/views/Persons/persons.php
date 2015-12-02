<div class="content-wrapper" ng-controller="pedidosController">
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Lista de Pedidos</h3>
                    </div>
                    <div class="box-body" >
                        <table id="example1" class="table table-bordered table-striped table-responsive">
                            <thead>
                            <tr>
                                <th>N�mero Pedido</th>
                                <th>Cliente</th>
                                <th>Loja</th>
                                <th>Situa��o</th>
                                <th>Situa��o</th>
                                <th>A��es</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr ng-repeat="pedido in pedidos">
                                <td>{{pedido.id}}</td>
                                <td>{{pedido.first_name}}</td>
                                <td>{{pedido.last_name}}</td>
                                <td>{{pedido.birthday}}</td>
                                <td><span class="label label-{{pedido.label}}">{{pedido.status}}</span></td>
                                <td align="center">
                                    <div class="btn-group-horizontal btn-group-sm">
                                        <button class="btn btn-default" type="button" >
                                            <i class="fa fa-fw fa-search"></i>
                                        </button>
                                        <button class="btn btn-default" type="button">
                                            <i class="fa fa-fw fa-pencil"></i>
                                        </button>
                                        <button class="btn btn-danger" type="button">
                                            <i class="fa fa-fw fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>



