"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var WikiComponent = /** @class */ (function () {
    function WikiComponent(pageRoute) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.baseWikiUrl = 'http://runescape.wikia.com/wiki/';
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.questName = params["questname"];
        });
        this.questWikiUrl = this.baseWikiUrl + this.questName;
    }
    WikiComponent.prototype.ngOnInit = function () { };
    WikiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-wiki',
            templateUrl: './wiki.component.html',
            styleUrls: ['./wiki.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.PageRoute])
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lraS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aWtpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBd0Q7QUFDeEQsNENBQTJDO0FBUTNDO0lBTUUsdUJBQXFCLFNBQW9CO1FBQXpDLGlCQVNDO1FBVG9CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIekMsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUsvQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2hDLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ25ELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNmLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBakJILGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBT2dDLGtCQUFTO09BTjlCLGFBQWEsQ0FxQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXdpa2knLFxuICB0ZW1wbGF0ZVVybDogJy4vd2lraS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpa2kuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXaWtpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBxdWVzdE5hbWU6IHN0cmluZztcbiAgYmFzZVdpa2lVcmwgPSAnaHR0cDovL3J1bmVzY2FwZS53aWtpYS5jb20vd2lraS8nO1xuICBxdWVzdFdpa2lVcmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkge1xuXG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHsgXG4gICAgICB0aGlzLnF1ZXN0TmFtZSA9IHBhcmFtc1tcInF1ZXN0bmFtZVwiXTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnF1ZXN0V2lraVVybCA9IHRoaXMuYmFzZVdpa2lVcmwgKyB0aGlzLnF1ZXN0TmFtZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgXG5cbn1cbiJdfQ==