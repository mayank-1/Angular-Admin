import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-dashbaord",
  templateUrl: "./dashbaord.component.html",
  styleUrls: ["./dashbaord.component.scss"]
})
export class DashbaordComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initializeChart("barChart", "bar", {
      labels: ["Sun", "Mon", "Tue", "Thur", "Fri", "Sat"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "red",
            "yellow",
            "purple",
            "green",
            "black",
            "orange",
            "blue"
          ],
          borderColor: "yellow",
          data: [0, 10, 5, 2, 20, 30, 45]
        }
      ]
    });
    this.initializeChart("lineChart", "line", {
      labels: ["Sun", "Mon", "Tue", "Thur", "Fri", "Sat"],
      datasets: [
        {
          label: "",
          backgroundColor: "red",
          borderColor: "yellow",
          data: [40, 30, 5, 20, 10, 4, 0]
        }
      ]
    });
    this.initializeChart("pieChart", "pie", {
      labels: ["new", "left", "old", "referal"],
      datasets: [
        {
          label: "",
          backgroundColor: ["green", "red", "yellow", "pink"],
          borderColor: "black",
          data: [50, 20, 20, 10]
        }
      ]
    });
  }

  initializeChart(id, type, options) {
    console.log("ID = " + id + " Options: ", options);
    var ctx = document.getElementById(id);
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: type,

      // The data for our dataset
      data: {
        labels: options.labels,
        datasets: options.datasets
      },

      // Configuration options go here
      options: {}
    });
  }
}
