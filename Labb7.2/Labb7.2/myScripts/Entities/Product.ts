module Entities {

    export class Product {
        public Name: string;
        public Category: string;
        public Price: number;
        public ArticleNumber: number;

        public constructor(Name: string, Category: string, Price: number, ArticleNumber: number) {
            this.Name = Name;
            this.Category = Category;
            this.Price = Price;
            this.ArticleNumber = ArticleNumber;
        }
    }
}