import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "../services/auth.service";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  animations: [
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
export class RegistrationComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  form: FormGroup;

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.authService.login(control.value).subscribe(user => {
        if (user) {
          resolve({
            forbiddenEmail: true
          });
        } else {
          resolve(null);
        }
      });
    });
  }

  onRegister() {
    if (this.form.invalid) {
      this.form.get("email").markAsTouched();
      this.form.get("password").markAsTouched();
      this.form.get("name").markAsTouched();
    } else {
      const formData = this.form.value;
      this.authService.register(formData).subscribe((user: any) => {
        this.router.navigate([`/login`]);
      });
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails.bind(this)
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ]),
      name: new FormControl(null, [Validators.required])
    });
  }
}
