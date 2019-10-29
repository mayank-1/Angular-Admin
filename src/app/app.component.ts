import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "admin-panel";

  hireMe() {
    window.open("https://mayank-1.github.io/", "_blank");
  }
}
