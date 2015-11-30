var Message = {
    config: {extraClasses: "messenger-fixed messenger-on-top messenger-on-right", theme: "air"},
    open: function (_meesage, _type) {
        Messenger(this.config).post({message: _meesage, type: _type, showCloseButton: !0})
    }
};
!function (app) {
    app.controller("appCtrl", ["$scope", function () {
    }]).controller("personCtrl", ["$scope", "$log", function ($scope) {
        $scope.grid = [],
            $scope.grid.persons = new kendo.data.DataSource({
                pageSize: 10,
                transport: {
                    read: {url: "Persons/All", dataType: "json"},
                    update: {
                        url: "Persons/Update", dataType: "json", complete: function () {
                            Message.open("Usu�rio Atualizado", "successo"), $scope.grid.persons.read()
                        }
                    },
                    destroy: {
                        url: "Persons/Delete", dataType: "json", complete: function () {
                            Message.open("The user deleted successofull", "successo"), $scope.grid.persons.read()
                        }
                    },
                    create: {
                        url: "Persons/Create", dataType: "json", complete: function () {
                            Message.open("The user added successofull", "successo"), $scope.grid.persons.read()
                        }
                    },
                    parameterMap: function (data, type) {
                        return "read" !== type ? (data.birthday = kendo.toString(new Date(data.birthday), "yyyy/MM/dd"), data) : void 0
                    }
                },
                schema: {
                    model: {
                        id: "id",
                        fields: {
                            id: {type: "number", editable: !1},
                            first_name: {type: "string"},
                            last_name: {type: "string"},
                            birthday: {type: "date"}
                        }
                    }
                }
            }),
            $scope.grid.columns = [{field: "id", title: "&nbsp", width: "50px"}, {
                field: "first_name",
                title: "Primeiro Nome"
            },
                {field: "last_name", title: "Ultimo Nome"}, {
                    field: "birthday",
                    title: "Aniversario",
                    format: "{0:MM/dd/yyyy}"
                }, {command: ["edit", "destroy"], width: "200px"}],

            $scope.grid.options = {
                columns: $scope.grid.columns,
                pageable: {refresh: !0, pageSizes: [10, 20, 50]},
                selectable: "row",
                sortable: !0,
                reorderable: !0,
                filterable: {extra: !1},
                editable: {mode: "popup"},
                toolbar: ["create"]
            }, $scope.onSelection = function () {
        }
    }])
}(angular.module("app", ["kendo.directives"]));