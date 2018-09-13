import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  form: FormGroup;

  onLogin() {
    if (this.form.invalid) {
      this.form.get("email").markAsTouched();
      this.form.get("password").markAsTouched();
    } else {
      const formData = this.form.value;
      this.authService.login(formData.email).subscribe((result: any) => {
      console.log('TCL: LoginComponent -> onLogin -> result', result);

      });
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
