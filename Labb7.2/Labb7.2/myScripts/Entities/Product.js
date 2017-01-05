var Entities;
(function (Entities) {
    var Product = (function () {
        function Product(Name, Category, Price, ArticleNumber) {
            this.Name = Name;
            this.Category = Category;
            this.Price = Price;
            this.ArticleNumber = ArticleNumber;
        }
        return Product;
    }());
    Entities.Product = Product;
})(Entities || (Entities = {}));
