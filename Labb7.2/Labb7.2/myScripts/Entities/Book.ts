module Entities {

    export class Book extends Product {
        public Author: string;
        public ReleaseYear: number;

        public constructor(Name: string, Category: string, Price: number, ArticleNumber: number, Author: string, ReleaseYear: number) {
            super(Name, Category, Price, ArticleNumber);
            this.Author = Author;
            this.ReleaseYear = ReleaseYear;
        }
    }
}