import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { QuestsComponent } from './quests/quests.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
    { path: "", redirectTo: "/quests", pathMatch: "full" },
    { path: "quests", component: QuestsComponent },
    { path: "wiki/:questname", component: WikiComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }