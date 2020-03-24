import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-dashboard',
 // styles:['.content{padding-top:85px;} .table-dash{margin-right: -42px;margin-left: -42px;}'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  startAnimationForLineChart(chart: any) {

  }
  startAnimationForBarChart(chart: any) {

  }
  public ngOnInit() {


   }
   ngAfterViewInit() {

   }
}
