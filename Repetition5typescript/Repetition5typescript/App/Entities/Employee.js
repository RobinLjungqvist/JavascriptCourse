var Entities;
(function (Entities) {
    var Employee = (function () {
        function Employee(FirstName, LastName, Department) {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Department = Department;
        }
        return Employee;
    }());
    Entities.Employee = Employee;
})(Entities || (Entities = {}));
