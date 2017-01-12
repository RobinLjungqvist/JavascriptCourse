/// <reference path="employee.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Entities;
(function (Entities) {
    var TechEmployee = (function (_super) {
        __extends(TechEmployee, _super);
        function TechEmployee(FirstName, LastName, Department, HasServiceCar, hasUniform) {
            _super.call(this, FirstName, LastName, Department);
            this.HasServiceCar = HasServiceCar;
            this.HasUniform = hasUniform;
        }
        return TechEmployee;
    }(Entities.Employee));
    Entities.TechEmployee = TechEmployee;
})(Entities || (Entities = {}));
