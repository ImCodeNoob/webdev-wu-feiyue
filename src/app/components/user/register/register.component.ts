import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service.client";
import {User} from "../../../models/user.model.client";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  userId: String;
  user: User;
  username: String;
  password: String;
  verifyPassword: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  register(username: String, password: String, verifyPassword: String) {
    this.errorFlag = false;
    if (username.trim() == "") {
      this.errorMsg = 'Username cannot be empty';
      this.errorFlag = true;
    }
    if (password.trim() == "") {
      this.errorMsg = 'Password cannot be empty';
      this.errorFlag = true;
    }
    if (this.password != this.verifyPassword) {
      this.errorMsg = 'Password and Verify Password do not match.';
      this.errorFlag = true;
    }
    if (!this.errorFlag) {
      this.user.username = this.username;
      this.user.password = this.password;
      this.userService.createUser(this.user).subscribe(
        (user: User) => {
          this.errorFlag = false;
          this.router.navigate(['/profile', user._id]);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = error;
        }
      );
    }

  }
}
