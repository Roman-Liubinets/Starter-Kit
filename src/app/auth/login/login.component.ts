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
import { Message } from "../models/message.models";
import { UserSevice } from "../services/user.service";

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
    private authService: AuthService,
    private userSevice: UserSevice
  ) {}

  form: FormGroup;
  loginScreenAnimations: string = "unchecked";
  message: Message;

  onLogin() {
    if (this.form.invalid) {
      this.form.get("email").markAsTouched();
      this.form.get("password").markAsTouched();
    } else {
      const formData = this.form.value;
      console.log("formData", formData);
      this.authService.login(formData.email).subscribe((user: any) => {
        // console.log("user", user);
        if (user === null) {
          this.showMessage({
            text: "This user does not exist!",
            type: "danger"
          });
          this.loginScreenAnimations = "invalid";
        } else {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
              this.message.text = "";
              window.localStorage.setItem("user", JSON.stringify(user));
              this.userSevice.login();
              this.router.navigate(["/system", "books"]);
            } else {
              this.loginScreenAnimations = "invalid";
              this.showMessage({
                text: "Password is incorrect",
                type: "danger"
              });
            }
          }
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

  private showMessage(message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = "";
    }, 5000);
  }

  ngOnInit() {
    this.message = new Message("danger", "");

    this.route.queryParams.subscribe((params: Params) => {
      if (params["nowCanlogin"]) {
        this.showMessage({ text: "Now you can login", type: "success" });
      } else if (params["accessDenied"]) {
        this.showMessage({
          text: "For working with system you need to login",
          type: "warning"
        });
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }
}
