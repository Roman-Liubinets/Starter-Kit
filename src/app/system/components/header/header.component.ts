import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { AuthService } from "../../../auth/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("handleTransition", [
      state(
        "void",
        style({
          position: "fixed",
          top: "0%",
          left: "-150%",
          width: "100%",
          opacity: 0
        })
      ),
      state("*", style({ position: "fixed", top: "0%", width: "100%" })),
      transition(
        ":enter",
        animate(
          "1s ease-out",
          style({ transform: "translateX(150%)", opacity: 1 })
        )
      ),
      transition(
        ":leave",
        animate(
          "1s ease-out",
          style({ transform: "translateX(150%)", opacity: 0 })
        )
      )
    ])
  ],
  host: { "[@handleTransition]": "" }
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  logOut() {
    this.authService.logOut();
    this.router.navigate(["/login"]);
  }
}
