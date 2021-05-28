import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaterialService } from '../shared/classes/material.service';
import { AuthService } from '../shared/services/auth/auth.service';
import { Md5 } from 'ts-md5/dist/md5'
import { SRV_URL } from '../config';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup 
  aSub: Subscription

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['accessDenied']) {
        MaterialService.toast('Please, log in')
      } else if (params['sessionFailed']) {
        MaterialService.toast('Please, log in again')
      }       
    })
  }

  async onSubmit(): Promise<void> {
    this.form.disable()

    let response = await fetch(`${SRV_URL}/seed/${this.form.value.email}`, { method: 'POST'});
      
    let json;
    if (response.ok)
    {
      json = await response.json();
    } else{
      MaterialService.toast(`Something went wrong (${status})`);
      return;
    }
    
    const user = {Login: this.form.value.email, Password: this.form.value.password}
    user.Password = Md5.hashStr(json.seed+(Md5.hashStr(user.Password) as string)) as string
    this.aSub = this.auth.login(user).subscribe(
      () => {
        if (this.auth.getRole() === 'admin'){
          this.router.navigate(['/site-admin'])
        } else {
          this.router.navigate(['/site-user'])
        }
        this.form.enable()
      },
      error => {
        MaterialService.toast(error.error.errorText)
        this.form.enable()
      }
    )
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}
