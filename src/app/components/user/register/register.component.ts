import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";
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
  user: User = {_id: "", username: "", password: "", firstName: "", lastName: ""};
  username: String;
  password: String;
  verifyPassword: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  register() {
    this.errorFlag = false;
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    this.userId = Math.round(Math.random() * 100) + "";
    if (this.userService.findUserByUsername(this.username) != null) {
      this.errorMsg = 'This username has already existed.';
      this.errorFlag = true;
    }
    if (this.password != this.verifyPassword) {
      this.errorMsg = 'Password and Verify Password do not match.';
      this.errorFlag = true;
    }
    if (!this.errorFlag) {
      this.user.username = this.username;
      this.user.password = this.password;
      this.user._id = this.userId;
      this.userService.createUser(this.user);
      this.router.navigate(['/profile', this.userService.findUserByUsername(this.username)._id]);
    }

  }
}
