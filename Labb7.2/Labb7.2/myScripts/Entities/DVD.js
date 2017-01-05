var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Entities;
(function (Entities) {
    var DVD = (function (_super) {
        __extends(DVD, _super);
        function DVD(Name, Category, Price, ArticleNumber, Director, Length) {
            _super.call(this, Name, Category, Price, ArticleNumber);
            this.Director = Director;
            this.Length = Length;
        }
        return DVD;
    }(Entities.Product));
    Entities.DVD = DVD;
})(Entities || (Entities = {}));
