module Entities {

    export class Employee {
        public FirstName: string;
        public LastName: string;
        public Department: string;


        public constructor(FirstName: string, LastName: string, Department: string) {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Department = Department;
        }
    }

}
