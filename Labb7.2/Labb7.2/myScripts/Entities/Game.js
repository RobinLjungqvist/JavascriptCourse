var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Entities;
(function (Entities) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game(Name, Category, Price, ArticleNumber, Developer, Publisher) {
            _super.call(this, Name, Category, Price, ArticleNumber);
            this.Developer = Developer;
            this.Publisher = Publisher;
        }
        return Game;
    }(Entities.Product));
    Entities.Game = Game;
})(Entities || (Entities = {}));
//# sourceMappingURL=Game.js.map