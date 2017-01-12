/// <reference path="./employee.ts" />

module Entities {

    export class AdminEmployee extends Employee {
        public HasCar: boolean;
        public OtherInfo: string;

        public constructor(FirstName: string, LastName: string, Department: string, hasCar: boolean, OtherInfo: string) {
            super(FirstName, LastName, Department);
            this.HasCar = hasCar;
            this.OtherInfo = OtherInfo;
        }

    }
}