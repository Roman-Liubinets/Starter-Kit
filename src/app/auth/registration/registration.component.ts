import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  form: FormGroup;

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
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ]),
      name: new FormControl(null, [Validators.required])
    });
  }
}
