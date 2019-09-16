import { Component, OnInit } from '@angular/core';

declare const STABLE_FEATURE: boolean;
declare const EXPERIMENTAL_FEATURE: boolean;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  stable_feature: string;
  experimental_feature: string;

  constructor() { }

  ngOnInit() {
    this.stable_feature = STABLE_FEATURE ? "Stable feature enabled" : "Stable feature disabled";
    this.experimental_feature = EXPERIMENTAL_FEATURE ? "Experimental feature enabled" : "Experimental feature disabled";
  }
}
