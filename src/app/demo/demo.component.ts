import { Component, OnInit } from '@angular/core';

declare const STABLE_FEATURE: boolean;
declare const EXPERIMENTAL_FEATURE: boolean;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  stableFeature: string;
  experimentalFeature: string;

  constructor() { }

  ngOnInit() {
    this.stableFeature = STABLE_FEATURE ? 'Stable feature enabled' : 'Stable feature disabled';
    this.experimentalFeature = EXPERIMENTAL_FEATURE ? 'Experimental feature enabled' : 'Experimental feature disabled';
  }
}