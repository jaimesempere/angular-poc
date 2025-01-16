import {Component, OnInit} from '@angular/core';
import {AppConfigService} from "./app-config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-poc';
  appTitle: string;

  constructor(private appConfigService: AppConfigService) {
    this.appTitle = this.appConfigService.getConfig().appTitle
  }

  ngOnInit(): void {
  }
}
