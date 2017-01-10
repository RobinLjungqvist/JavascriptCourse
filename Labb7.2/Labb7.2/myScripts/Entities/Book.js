var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Entities;
(function (Entities) {
    var Book = (function (_super) {
        __extends(Book, _super);
        function Book(Name, Category, Price, ArticleNumber, Author, ReleaseYear) {
            _super.call(this, Name, Category, Price, ArticleNumber);
            this.Author = Author;
            this.ReleaseYear = ReleaseYear;
        }
        return Book;
    }(Entities.Product));
    Entities.Book = Book;
})(Entities || (Entities = {}));
//# sourceMappingURL=Book.js.map