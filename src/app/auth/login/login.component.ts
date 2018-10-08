import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "../services/auth.service";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [
    trigger("loginScreenAnimations", [
      state("invalid", style({})),
      state("unchecked", style({})),
      state("completed", style({ transform: "translateX(150%)" })),
      transition(
        "unchecked => invalid",
        animate(
          250,
          keyframes([
            style({ transform: "translateX(-10%)" }),
            style({ transform: "translateX(10%)" }),
            style({ transform: "translateX(-10%)" }),
            style({ transform: "translateX(10%)" })
          ])
        )
      )
    ]),
    trigger("handleTransition", [
      state(
        "void",
        style({
          position: "fixed",
          top: "5%",
          left: "-150%",
          width: "100%",
          opacity: 0
        })
      ),
      state("*", style({ position: "fixed", top: "5%", width: "100%" })),
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
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  form: FormGroup;
  loginScreenAnimations: string = "unchecked";

  onLogin() {
    if (this.form.invalid) {
      this.form.get("email").markAsTouched();
      this.form.get("password").markAsTouched();
    } else {
      const formData = this.form.value;
      this.authService.login(formData.email).subscribe((user: any) => {
        if (user.email === formData.email) {
          if (user.password === formData.password) {
            window.localStorage.setItem("user", JSON.stringify(user));
            // this.loginScreenAnimation = "completed";
            this.router.navigate(["/system", "books"]);
          }
        } else {
          // this.loginScreenAnimations = "invalid";
        }
        // console.log("TCL: LoginComponent -> onLogin -> result", user);
      });
    }
  }

  setBackToUnchecked() {
    if (this.loginScreenAnimations === "invalid") {
      this.loginScreenAnimations = "unchecked";
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }
}
