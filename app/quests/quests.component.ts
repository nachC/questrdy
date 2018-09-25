import { Component, OnInit } from '@angular/core';
import { QuestService } from '../services/quest.service';
import { SearchBar } from 'ui/search-bar';
import { RouterExtensions } from "nativescript-angular/router";
import * as connectivity from "connectivity";

@Component({
  moduleId: module.id,
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent implements OnInit {

  quests = [];
  searchBar: boolean = false;
  busy: boolean = false;
  errors = {
    error: false,
    message: `Hmmm couldn\'t find anything.\n\n Make sure your RuneMetrics profile is set to public.\n You can do that in your RS Account Settings.\n 
    It could also be that you\'re not eligible to do any quests right now.\n 
    Or you have finished them all and you\'re just trolling me...`
  };

  constructor(private questService: QuestService, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    connectivity.startMonitoring((newConnectionType: number) => {
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
  }

  showSearch() {
    this.searchBar = !this.searchBar;
  }

  validateUsername(username: string) {
    let regex = new RegExp(/[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/, 'g');

    if (regex.test(username)) {
      return false;
    }
    else {
      return true;
    }
  }

  onSubmit(args) {

    if(connectivity.getConnectionType() === 0) {
      alert("Check your internet connection")
      return;
    }
    
    let searchBar = <SearchBar>args.object;
    let username = searchBar.text;

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

      this.questService.getQuests(username).subscribe(data => {
        let questsTemp = data['quests'].filter(e => e['userEligible'] === true && e['status'] !== 'COMPLETED');
        this.busy = false;
        if (questsTemp.length === 0) {
          this.errors.error = true;
          return;
        }
        this.quests = questsTemp;
        console.log('Quests Ready to do:', this.quests.length);
      }, error => {
        this.busy = false;
        this.errors.error = true;
        return;
      });
      searchBar.dismissSoftInput();
      this.searchBar = false;
    }
  }

  navigateToWiki(questname: string) {
    console.log(questname);
    this.routerExtensions.navigate(['/wiki', questname]);
  }

}
