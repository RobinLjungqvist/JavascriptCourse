module Entities {

    export class Game extends Product {
        public Developer: string;
        public Publisher: string;
        public constructor(Name: string, Category: string, Price: number, ArticleNumber: number, Developer: string, Publisher: string) {
            super(Name, Category, Price, ArticleNumber);
            this.Developer = Developer;
            this.Publisher = Publisher;
        }

    }
}