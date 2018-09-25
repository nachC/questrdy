"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var QuestService = /** @class */ (function () {
    function QuestService(http) {
        this.http = http;
        this.baseUrl = 'https://apps.runescape.com/runemetrics/quests?user=';
    }
    QuestService.prototype.getQuests = function (username) {
        return this.http.get(this.baseUrl + username);
    };
    QuestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuestService);
    return QuestService;
}());
exports.QuestService = QuestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBRy9EO0lBSUUsc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsWUFBTyxHQUFHLHFEQUFxRCxDQUFDO0lBRXhCLENBQUM7SUFFekMsZ0NBQVMsR0FBVCxVQUFVLFFBQWdCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFSVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBS2UsaUJBQVU7T0FKekIsWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVlc3RTZXJ2aWNlIHtcblxuICBiYXNlVXJsID0gJ2h0dHBzOi8vYXBwcy5ydW5lc2NhcGUuY29tL3J1bmVtZXRyaWNzL3F1ZXN0cz91c2VyPSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRRdWVzdHModXNlcm5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIHVzZXJuYW1lKTtcbiAgfVxuXG59XG4iXX0=