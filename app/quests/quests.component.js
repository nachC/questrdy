"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quest_service_1 = require("../services/quest.service");
var router_1 = require("nativescript-angular/router");
var connectivity = require("connectivity");
var QuestsComponent = /** @class */ (function () {
    function QuestsComponent(questService, routerExtensions) {
        this.questService = questService;
        this.routerExtensions = routerExtensions;
        this.quests = [];
        this.searchBar = false;
        this.busy = false;
        this.errors = {
            error: false,
            message: "Hmmm couldn't find anything.\n\n Make sure your RuneMetrics profile is set to public.\n You can do that in your RS Account Settings.\n \n    It could also be that you're not eligible to do any quests right now.\n \n    Or you have finished them all and you're just trolling me..."
        };
    }
    QuestsComponent.prototype.ngOnInit = function () {
        connectivity.startMonitoring(function (newConnectionType) {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    console.log("Connection type changed to none.");
                    alert("Check your internet connection");
                    break;
                case connectivity.connectionType.wifi:
                    console.log("Connection type changed to WiFi.");
                    break;
                case connectivity.connectionType.mobile:
                    console.log("Connection type changed to mobile.");
                    break;
                default:
                    break;
            }
        });
    };
    QuestsComponent.prototype.showSearch = function () {
        this.searchBar = !this.searchBar;
    };
    QuestsComponent.prototype.validateUsername = function (username) {
        var regex = new RegExp(/[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/, 'g');
        if (regex.test(username)) {
            return false;
        }
        else {
            return true;
        }
    };
    QuestsComponent.prototype.onSubmit = function (args) {
        var _this = this;
        if (connectivity.getConnectionType() === 0) {
            alert("Check your internet connection");
            return;
        }
        var searchBar = args.object;
        var username = searchBar.text;
        if (!this.validateUsername(username)) {
            //if it's not a valid username show alert and return
            console.log("Invalid username");
            alert("Enter a valid username");
            return;
        }
        else {
            console.log("Valid username");
            if (username.search(' ') !== -1) {
                //if username has white spaces, replace them with '+'
                username = username.replace(/\s/g, '+');
            }
            if (this.errors.error) {
                //clean any past errors
                this.errors.error = false;
            }
            this.busy = true;
            this.questService.getQuests(username).subscribe(function (data) {
                var questsTemp = data['quests'].filter(function (e) { return e['userEligible'] === true && e['status'] !== 'COMPLETED'; });
                _this.busy = false;
                if (questsTemp.length === 0) {
                    _this.errors.error = true;
                    return;
                }
                _this.quests = questsTemp;
                console.log('Quests Ready to do:', _this.quests.length);
            }, function (error) {
                _this.busy = false;
                _this.errors.error = true;
                return;
            });
            searchBar.dismissSoftInput();
            this.searchBar = false;
        }
    };
    QuestsComponent.prototype.navigateToWiki = function (questname) {
        console.log(questname);
        this.routerExtensions.navigate(['/wiki', questname]);
    };
    QuestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-quests',
            templateUrl: './quests.component.html',
            styleUrls: ['./quests.component.scss']
        }),
        __metadata("design:paramtypes", [quest_service_1.QuestService, router_1.RouterExtensions])
    ], QuestsComponent);
    return QuestsComponent;
}());
exports.QuestsComponent = QuestsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkRBQXlEO0FBRXpELHNEQUErRDtBQUMvRCwyQ0FBNkM7QUFRN0M7SUFZRSx5QkFBb0IsWUFBMEIsRUFBVSxnQkFBa0M7UUFBdEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBVjFGLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsV0FBTSxHQUFHO1lBQ1AsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUseVJBRXFEO1NBQy9ELENBQUM7SUFFNEYsQ0FBQztJQUUvRixrQ0FBUSxHQUFSO1FBQ0UsWUFBWSxDQUFDLGVBQWUsQ0FBQyxVQUFDLGlCQUF5QjtZQUNyRCxNQUFNLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJO29CQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7b0JBQ2hELEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO29CQUN4QyxLQUFLLENBQUM7Z0JBQ1IsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUk7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztvQkFDaEQsS0FBSyxDQUFDO2dCQUNSLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7b0JBQ2xELEtBQUssQ0FBQztnQkFDUjtvQkFDRSxLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxD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Z0JBQ3pCLE1BQU0sQ0FBQztZQUNULENBQUMsQ0FBQyxDQUFDO1lBQ0gsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsU0FBaUI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQW5HVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDO3lDQWFrQyw0QkFBWSxFQUE0Qix5QkFBZ0I7T0FaL0UsZUFBZSxDQXFHM0I7SUFBRCxzQkFBQztDQUFBLEFBckdELElBcUdDO0FBckdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFF1ZXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3F1ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAndWkvc2VhcmNoLWJhcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgY29ubmVjdGl2aXR5IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXF1ZXN0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVzdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9xdWVzdHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBRdWVzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHF1ZXN0cyA9IFtdO1xuICBzZWFyY2hCYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYnVzeTogYm9vbGVhbiA9IGZhbHNlO1xuICBlcnJvcnMgPSB7XG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IGBIbW1tIGNvdWxkblxcJ3QgZmluZCBhbnl0aGluZy5cXG5cXG4gTWFrZSBzdXJlIHlvdXIgUnVuZU1ldHJpY3MgcHJvZmlsZSBpcyBzZXQgdG8gcHVibGljLlxcbiBZb3UgY2FuIGRvIHRoYXQgaW4geW91ciBSUyBBY2NvdW50IFNldHRpbmdzLlxcbiBcbiAgICBJdCBjb3VsZCBhbHNvIGJlIHRoYXQgeW91XFwncmUgbm90IGVsaWdpYmxlIHRvIGRvIGFueSBxdWVzdHMgcmlnaHQgbm93LlxcbiBcbiAgICBPciB5b3UgaGF2ZSBmaW5pc2hlZCB0aGVtIGFsbCBhbmQgeW91XFwncmUganVzdCB0cm9sbGluZyBtZS4uLmBcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHF1ZXN0U2VydmljZTogUXVlc3RTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbm5lY3Rpdml0eS5zdGFydE1vbml0b3JpbmcoKG5ld0Nvbm5lY3Rpb25UeXBlOiBudW1iZXIpID0+IHtcbiAgICAgIHN3aXRjaCAobmV3Q29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gdHlwZSBjaGFuZ2VkIHRvIG5vbmUuXCIpO1xuICAgICAgICAgIGFsZXJ0KFwiQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiB0eXBlIGNoYW5nZWQgdG8gV2lGaS5cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm1vYmlsZTpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gdHlwZSBjaGFuZ2VkIHRvIG1vYmlsZS5cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93U2VhcmNoKCkge1xuICAgIHRoaXMuc2VhcmNoQmFyID0gIXRoaXMuc2VhcmNoQmFyO1xuICB9XG5cbiAgdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvWyFAIyQlXiYqKCkrXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XS8sICdnJyk7XG5cbiAgICBpZiAocmVnZXgudGVzdCh1c2VybmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdChhcmdzKSB7XG5cbiAgICBpZihjb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gMCkge1xuICAgICAgYWxlcnQoXCJDaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb25cIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgbGV0IHVzZXJuYW1lID0gc2VhcmNoQmFyLnRleHQ7XG5cbiAgICBpZiAoIXRoaXMudmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSkpIHtcbiAgICAgIC8vaWYgaXQncyBub3QgYSB2YWxpZCB1c2VybmFtZSBzaG93IGFsZXJ0IGFuZCByZXR1cm5cbiAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCB1c2VybmFtZVwiKTtcbiAgICAgIGFsZXJ0KFwiRW50ZXIgYSB2YWxpZCB1c2VybmFtZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlZhbGlkIHVzZXJuYW1lXCIpO1xuICAgICAgaWYgKHVzZXJuYW1lLnNlYXJjaCgnICcpICE9PSAtMSkge1xuICAgICAgICAvL2lmIHVzZXJuYW1lIGhhcyB3aGl0ZSBzcGFjZXMsIHJlcGxhY2UgdGhlbSB3aXRoICcrJ1xuICAgICAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoL1xccy9nLCAnKycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lcnJvcnMuZXJyb3IpIHtcbiAgICAgICAgLy9jbGVhbiBhbnkgcGFzdCBlcnJvcnNcbiAgICAgICAgdGhpcy5lcnJvcnMuZXJyb3IgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG5cbiAgICAgIHRoaXMucXVlc3RTZXJ2aWNlLmdldFF1ZXN0cyh1c2VybmFtZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBsZXQgcXVlc3RzVGVtcCA9IGRhdGFbJ3F1ZXN0cyddLmZpbHRlcihlID0+IGVbJ3VzZXJFbGlnaWJsZSddID09PSB0cnVlICYmIGVbJ3N0YXR1cyddICE9PSAnQ09NUExFVEVEJyk7XG4gICAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgICBpZiAocXVlc3RzVGVtcC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVycm9ycy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVlc3RzID0gcXVlc3RzVGVtcDtcbiAgICAgICAgY29uc29sZS5sb2coJ1F1ZXN0cyBSZWFkeSB0byBkbzonLCB0aGlzLnF1ZXN0cy5sZW5ndGgpO1xuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lcnJvcnMuZXJyb3IgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgICAgIHNlYXJjaEJhci5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICB0aGlzLnNlYXJjaEJhciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5hdmlnYXRlVG9XaWtpKHF1ZXN0bmFtZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2cocXVlc3RuYW1lKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvd2lraScsIHF1ZXN0bmFtZV0pO1xuICB9XG5cbn1cbiJdfQ==