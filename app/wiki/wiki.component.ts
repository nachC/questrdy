import { Component, OnInit } from '@angular/core';
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  moduleId: module.id,
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  questName: string;
  baseWikiUrl = 'http://runescape.wikia.com/wiki/';
  questWikiUrl: string;

  constructor( private pageRoute: PageRoute) {

    this.pageRoute.activatedRoute.pipe(
      switchMap(activatedRoute => activatedRoute.params)
    ).forEach((params) => { 
      this.questName = params["questname"];
    });
    
    this.questWikiUrl = this.baseWikiUrl + this.questName;
  }

  ngOnInit() { }

  

}
