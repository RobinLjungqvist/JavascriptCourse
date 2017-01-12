/// <reference path="employee.ts" />

module Entities {

    export class TechEmployee extends Employee {
        public HasServiceCar: boolean;
        public HasUniform: boolean;

        public constructor(FirstName: string, LastName: string, Department: string, HasServiceCar: boolean, hasUniform: boolean) {
            super(FirstName, LastName, Department);
            this.HasServiceCar = HasServiceCar;
            this.HasUniform = hasUniform;
        }

    }
}