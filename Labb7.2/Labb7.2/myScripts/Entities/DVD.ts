module Entities {

    export class DVD extends Product {
        public Director: string;
        public Length: string;

        public constructor(Name: string, Category: string, Price: number, ArticleNumber: number, Director: string, Length: string) {
            super(Name, Category, Price, ArticleNumber);
            this.Director = Director;
            this.Length = Length;
        }

    }
}