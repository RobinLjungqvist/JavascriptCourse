/// <reference path="./employee.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Entities;
(function (Entities) {
    var AdminEmployee = (function (_super) {
        __extends(AdminEmployee, _super);
        function AdminEmployee(FirstName, LastName, Department, hasCar, OtherInfo) {
            _super.call(this, FirstName, LastName, Department);
            this.HasCar = hasCar;
            this.OtherInfo = OtherInfo;
        }
        return AdminEmployee;
    }(Entities.Employee));
    Entities.AdminEmployee = AdminEmployee;
})(Entities || (Entities = {}));
